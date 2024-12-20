import { Users } from "src/entities/user.entity";

export class RegistrationRespModel {
  successStatus: boolean;
  message: string;
  user: Users
}