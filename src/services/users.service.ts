import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Users } from '../entities/user.entity';
import { DateTime } from "luxon";
import * as randomToken from 'rand-token';
import { RegistrationReqModel } from 'src/dtos/registration.req.model';
import { RegistrationRespModel } from 'src/dtos/registration.resp.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) { }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  find(id: number): Promise<Users> {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  findOne(email: string): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: { email: email } });
  }

  updateUser(user, profil) {
    return this.usersRepository.update(profil, user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  private async registrationValidation(
    regModel: RegistrationReqModel,
  ): Promise<string> {
    if (!regModel.email) {
      return "L'email ne peut être vide";
    }

    const emailRule =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRule.test(regModel.email.toLowerCase())) {
      return "L'email n'est pas valide";
    }

    const user = await this.usersRepository.findOne({ where: { email: regModel.email } });
    if (user != null && user.email) {
      return "Un compte possédant cet email éxiste déjà";
    }

    if (regModel.password !== regModel.confirmPassword) {
      return 'Le mot de passe de confirmation ne correspond pas';
    }
    return '';
  }

  private async getPasswordHash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  public async registerUser(
    regModel: RegistrationReqModel,
  ): Promise<RegistrationRespModel> {
    const result = new RegistrationRespModel();

    const errorMessage = await this.registrationValidation(regModel);
    if (errorMessage) {
      result.message = errorMessage;
      result.successStatus = false;

      return result;
    }

    const newUser = new Users();

    newUser.email = regModel.email;
    newUser.password = await this.getPasswordHash(regModel.password);

    newUser.created_at = DateTime.now();

    const createdUser = await this.usersRepository.insert(newUser);
    result.user = createdUser.generatedMaps[0] as Users;
    result.successStatus = true;
    result.message = 'Bienvenue sur SWP!';
    return result;
  }

  public async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<Users> {
    const user = await this.usersRepository.findOne({ where: { email: email } });

    if (user == null) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return null;
    }

    const currentUser = new Users();
    currentUser.id = user.id;
    currentUser.email = user.email;

    return currentUser;
  }

  public async getJwtToken(user: Users): Promise<string> {
    const payload = {
      ...user,
    };
    return this.jwtService.signAsync(payload);
  }

  public async getRefreshToken(userId: number): Promise<string> {
    const userDataToUpdate = {
      refreshToken: randomToken.generate(16),
      refreshTokenExp: DateTime.now().plus({ days: 14 }).toISODate(),
    };

    await this.usersRepository.update(userId, userDataToUpdate);
    return userDataToUpdate.refreshToken;
  }

  public async validRefreshToken(
    email: string,
    refreshToken: string,
  ): Promise<Users> {
    const currentDate = DateTime.now().plus({ days: 14 }).toISODate();
    const user = await this.usersRepository.findOne({
      where: {
        email: email,
        refreshToken: refreshToken,
        refreshTokenExp: MoreThanOrEqual(currentDate),
      },
    });

    if (!user) {
      return null;
    }

    const currentUser = new Users();
    currentUser.id = user.id;
    currentUser.email = user.email;

    return currentUser;
  }
}
