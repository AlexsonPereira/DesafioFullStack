import { Router } from "express";
import { createContactController, deleteContactController, listContactController } from "../controllers/contact.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewar";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import { createContactSerializer } from "../serializer/contact.serializer";


export const contactRoute = Router()

contactRoute.get('',verifyAuthMiddleware, listContactController)
contactRoute.post('',ensureDataIsValidMiddleware(createContactSerializer), verifyAuthMiddleware, createContactController)
contactRoute.delete('/:id',verifyAuthMiddleware, deleteContactController)