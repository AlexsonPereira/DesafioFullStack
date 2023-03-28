import { IContactRequest } from '../../interfaces/contact'
import AppDataSource from '../../data-source'
import { Contact } from '../../entities/contacts.entity'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/AppError'
import { responseUserSerializer } from '../../serializer/user.serializer'

export const createContactService = async (body: IContactRequest, id: string) => {
  const contactRepo = AppDataSource.getRepository(Contact)
  const userRepo = AppDataSource.getRepository(User)

  const userFound = await userRepo.findOneBy({ id: id })
  const contactExists = await contactRepo.findOneBy({ phone: body.phone, email: body.email })

  if (!userFound) {
    throw new AppError('User not Found', 404)
  }

  if (contactExists !== null) {
    throw new AppError('Contact already exists', 409)
  }

  const contactCreated = contactRepo.create({
    ...body,
    user: userFound
  })

  await contactRepo.save(contactCreated)
  const ContactCreatedSerialized = await responseUserSerializer.validate(contactCreated, {
    stripUnknown: true
  })

  return ContactCreatedSerialized
}
