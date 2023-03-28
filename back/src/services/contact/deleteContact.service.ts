import AppDataSource from '../../data-source'
import { Contact } from '../../entities/contacts.entity'
import { AppError } from '../../errors/AppError'
import { IContactRequest } from '../../interfaces/contact'

export const deleteContactService = async (idUser: string, idContact: string) => {
  const contactRepo = AppDataSource.getRepository(Contact)

  const contactFind = await contactRepo.findOne({
    where: {
      id: idContact
    }
  })
  if (!contactFind) {
    throw new AppError('Contact not found', 404)
  }

  if (!(contactFind?.user.id === idUser)) {
    throw new AppError('Not permission', 404)
  }

  contactRepo.remove(contactFind)

  return {}
}
