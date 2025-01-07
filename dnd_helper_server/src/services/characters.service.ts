import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Characters } from 'src/entities/character.entity';
import { CharacterCreationModel } from 'src/dtos/character-creation.model';

@Injectable()
export class CharactersService {
  private readonly logger = new Logger(CharactersService.name);
  constructor(
    @InjectRepository(Characters)
    private charactersRepository: Repository<Characters>,
  ) { }

  findAllByUserId(id: number): Promise<Characters[]> {
    return this.charactersRepository.find({ where: { users_id: id } });
  }

  findCharacterById(id: number): Promise<Characters> {
    return this.charactersRepository.findOne({ where: { id: id } });
  }

  async createCharacter(data: CharacterCreationModel): Promise<void> {
    await this.charactersRepository.insert(data);
  }

  async removeOneById(id: number): Promise<void> {
    await this.charactersRepository.delete(id);
  }

}
