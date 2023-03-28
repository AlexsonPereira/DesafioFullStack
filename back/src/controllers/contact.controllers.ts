import { Request, Response } from 'express'
import { createContactService } from '../services/contact/createContact.service'
import { deleteContactService } from '../services/contact/deleteContact.service'
import { listContactService } from '../services/contact/listContact.service'

export const createContactController = async (req: Request, res: Response) => {
  const contactCreated = await createContactService(req.body, req.user.id)
  return res.status(201).json(contactCreated)
}
export const listContactController = async (req: Request, res: Response) => {
  const contactList = await listContactService(req.user.id)
  return res.status(201).json(contactList)
}
export const deleteContactController = async (req: Request, res: Response) => {
  const deletedContact = await deleteContactService(req.user.id, req.params.id)
  return res.status(204).json(deletedContact)
}
