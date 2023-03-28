import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/AppError'
import { IUserRequest } from '../../interfaces/users'
import { createUserSerializer, responseUserSerializer } from '../../serializer/user.serializer'

export const createUserService = async (body: IUserRequest) => {
  const userRep = AppDataSource.getRepository(User)
  const verifyUserExist = await userRep.findOneBy({
    email: body.email,
    phone: body.phone
  })

  if (verifyUserExist != null) {
    throw new AppError('Account exists', 409)
  }

  const createUser = userRep.create(body)
  await userRep.save(createUser)
  const userCreated = await responseUserSerializer.validate(createUser, {
    stripUnknown: true
  })

  return userCreated
}
