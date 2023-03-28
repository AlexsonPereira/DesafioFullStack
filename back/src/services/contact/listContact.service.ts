import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { IContactRequest } from "../../interfaces/contact"
import { responseListContactsSerializer } from "../../serializer/contact.serializer"

export const listContactService = async (id:string) => {
   const contactRepo = AppDataSource.getRepository(Contact)
   const contactlist = await contactRepo.find({
      where : {
         user : {
            id : id
         }
      }
   })
   
   const listContactSerialized = await responseListContactsSerializer.validate(contactlist,{
      stripUnknown: true,
   })

   return listContactSerialized
}