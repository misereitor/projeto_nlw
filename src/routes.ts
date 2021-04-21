import { Router } from "express"
import { SettingsController } from "./controllers.ts/SettingsController"
import { UserController } from "./controllers.ts/UserController"
import { MessagesControler } from "./controllers.ts/MessageControler"

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UserController
const messagesController = new MessagesControler

routes.post("/settings", settingsController.create)
routes.post('/users', usersController.create)
routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)

export { routes }