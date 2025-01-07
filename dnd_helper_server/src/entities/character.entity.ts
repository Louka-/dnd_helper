import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";

@Entity('characters')
export class Characters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  users_id: number;

  @ManyToOne(() => Users, (user) => user.characters,{
      onDelete: 'CASCADE',
      cascade: true
    })
  @JoinColumn({name: 'users_id'})
  users: Users;

  @Column()
  name: string;

  @Column()
  strength: number;

  @Column()
  dexterity: number;

  @Column()
  constitution: number;

  @Column()
  intelligence: number;

  @Column()
  wisdom: number;

  @Column()
  charisma: number;

  @Column()
  level: number;

  @Column()
  xp: number;

  @Column()
  race: string;

  @Column()
  class: string;

  @Column()
  background: string;

  @Column('text', { array: true })
  languages: string[];

  @Column('text', { array: true })
  items: string[];

  @Column('text', { array: true })
  traits: string[];

  @Column('text', { array: true })
  spells: string[];

  @Column('text', { array: true })
  skills: string[];

  @Column('text', { array: true })
  proficiencies: string[];
}