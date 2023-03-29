import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { userRoute } from './routes/users.routes'
import { sessionRoute } from './routes/session.routes'
import handleError from './errors/handleError'
import { contactRoute } from './routes/contact.routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/users', userRoute)
app.use('/login', sessionRoute)
app.use('/contact', contactRoute)

app.use(handleError)

export default app
