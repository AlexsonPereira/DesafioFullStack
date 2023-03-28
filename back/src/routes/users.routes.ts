import { Router } from "express";
import { createUserController, deleteUserController, editUserController, listUserController } from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewar";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import { createUserSerializer } from "../serializer/user.serializer";

export const userRoute = Router()

userRoute.post('', ensureDataIsValidMiddleware(createUserSerializer), createUserController)
userRoute.get('', verifyAuthMiddleware, listUserController)
userRoute.patch('/:id', verifyAuthMiddleware, ensureDataIsValidMiddleware(createUserSerializer), editUserController)
userRoute.delete('/:id', verifyAuthMiddleware, deleteUserController)
