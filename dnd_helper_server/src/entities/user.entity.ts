import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Timestamp } from 'src/generics/timestamp.entity';
import { Characters } from './character.entity';

@Entity('users')
export class Users extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, name: 'refreshtoken' })
  refreshToken: string;

  @Column({ type: 'date', nullable: true, name: 'refreshtokenexp' })
  refreshTokenExp: string;

  @OneToMany(() => Characters, (character) => character.users, { nullable: true, eager: true })
  characters?: Characters[];
}
