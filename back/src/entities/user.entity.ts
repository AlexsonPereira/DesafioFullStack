import { hashSync } from 'bcrypt';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, BeforeUpdate, OneToMany} from 'typeorm';
import { Contact } from './contacts.entity';

@Entity('users')
class User {

   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   password: string

   @Column()
   phone: string

   @CreateDateColumn()
   createdAt: Date

   @OneToMany(() => Contact, contact => contact)
   contacts : Contact[] 

   @BeforeUpdate()
   @BeforeInsert()
   hashPassword(){
      this.password = hashSync(this.password,10)
   }
}

export {User}