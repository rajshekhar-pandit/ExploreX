import express from "express"
import contactUsController from "../controller/contactUsController.js"
import { middleware } from "../utilis/middleware.js"
const contactUsRouter = express.Router()

contactUsRouter.post("/createContactUs",middleware, contactUsController.createContactUs)
contactUsRouter.get("/getAllContactUs", contactUsController.getAllContactUs)
contactUsRouter.get("/singleGetContactUs/:id", contactUsController.singleGetContactUs)
contactUsRouter.delete("/deleteSingleContactUs/:id", contactUsController.deleteSingleContactUs)

export default contactUsRouter