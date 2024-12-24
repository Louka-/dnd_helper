import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('ability_score')
export class AbilityScore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}