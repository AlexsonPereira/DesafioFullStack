import { IUserResponse } from '../interfaces/users'
import * as yup from 'yup'
import { responseUserSerializer } from './user.serializer'

export const createContactSerializer: any = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required()
})

export const responseContactSerializer: any = yup.object().shape({
  id: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  createdAt: yup.string().required(),
  name: yup.string().required()
})

export const responseListContactsSerializer: any = yup.array(responseContactSerializer)
