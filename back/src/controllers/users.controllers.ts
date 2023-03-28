import { Request, Response } from 'express'
import { createUserService } from '../services/users/createUser.service'
import { deleteUserService } from '../services/users/deleteUser.service'
import { editUserService } from '../services/users/editUser.service'
import { listUserService } from '../services/users/listUser.service'

export const createUserController = async (req: Request, res: Response) => {
  const created = await createUserService(req.body)
  return res.status(201).json(created)
}

export const listUserController = async (req: Request, res: Response) => {
  const list = await listUserService(req.user.id)
  return res.status(200).json(list)
}

export const editUserController = async (req: Request, res: Response) => {
  const id = req.params.id
  const body = req.body
  const idUser = req.user.id
  const edited = await editUserService(id, idUser, body)
  return res.status(200).json(edited)
}

export const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id
  await deleteUserService(id)
  return res.status(204).json({})
}
