import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('success')
export class Success extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  time: number;
}
