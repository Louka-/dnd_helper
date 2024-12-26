import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from 'src/generics/timestamp.entity';

@Entity('user')
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
}
