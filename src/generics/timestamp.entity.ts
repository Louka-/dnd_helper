import { CreateDateColumn } from "typeorm";

export class Timestamp {
  @CreateDateColumn({
    update: false
  })
  created_at: Date;
}