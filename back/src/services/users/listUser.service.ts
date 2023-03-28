import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { responseUserSerializer } from "../../serializer/user.serializer"

export const listUserService = async (id:string) => {

   const userRepo = AppDataSource.getRepository(User)

   const usersList = await userRepo.findOneBy({id:id})

   console.log(usersList)

   const listUsersWithoutPass = await responseUserSerializer.validate(usersList,{
      stripUnknown: true
   })

   return listUsersWithoutPass
}