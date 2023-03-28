import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from 'typeorm';
import { User } from './user.entity';

@Entity('contacts')
class Contact {

   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   phone: string

   @CreateDateColumn()
   createdAt: Date

   @ManyToOne(() => User, {eager: true})
   user : User
}

export {Contact}