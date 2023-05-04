import{BaseEntity,PrimaryGeneratedColumn,CreateDateColumn,Entity} from 'typeorm';

@Entity('error')
export class Error extends BaseEntity {
    @PrimaryGeneratedColumn()
   id: number;
    @CreateDateColumn()
   created_at: Date;
}