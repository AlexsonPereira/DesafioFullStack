import { IUser } from '../users'

export interface IContactRequest {
  name: string
  email: string
  phone: string
  user: any
}

export interface IContactResponse {
  id: string
  name: string
  email: string
  phone: string
  createdAt: Date
  user: IUser
}
