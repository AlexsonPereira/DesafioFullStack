import { IUserResponse } from "../interfaces/users";
import * as yup from "yup"
import { responseContactSerializer } from "./contact.serializer";

export const createUserSerializer: any  = yup.object().shape({
   name : yup.string().required(),
   email : yup.string().email().required(),
   password : yup.string().required(),
   phone : yup.string().required()
})

export const responseUserSerializer: any = yup.object().shape({
   id: yup.string().required(),
   email : yup.string().email().required(),
   phone : yup.string().required(),
   createdAt : yup.date().required(),
   name : yup.string().required()
})