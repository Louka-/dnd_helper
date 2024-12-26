import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('ability_score')
export class AbilityScore {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}