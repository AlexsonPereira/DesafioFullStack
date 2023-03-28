import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { IUserUpdate } from "../../interfaces/users"
// import { responseUserSerializer } from "../../serializer/users.serializer"

export const editUserService = async (id : string, idUser : string, body :IUserUpdate) => {
   

   const userRepo = AppDataSource.getRepository(User)
   
   if(id !== idUser){
      throw new AppError("You not authorization", 401)
   }

   const userEditFind = await userRepo.findOneBy({
      id: id
   })

   if(!userEditFind){
      throw new AppError("User not Found", 404)
   }

   const userEdit = userRepo.create({
      ...userEditFind,
      ...body

   })

   await userRepo.save(userEdit)

   const userEdited = await userRepo.findOneBy({
      id : id
   })
      
   // const userWithoutPass = await responseUserSerializer.validate(userEdited,{
   //    stripUnknown: true
   // })
   
   return userEdited
}