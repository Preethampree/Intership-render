import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column()
  medicalHistory: string;

  @OneToOne(() => User, user => user.patient)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
