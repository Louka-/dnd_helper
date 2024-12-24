import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('proficiency')
export class Proficiency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}