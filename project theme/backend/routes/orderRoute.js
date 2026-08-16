import express from "express"
import { orderCreate, orderDelete, orderGetAll, orderGetAllForAdmin, paymentSubmit, singleOrderGet, singleOrderGetForAdmin } from "../controller/orderController.js"
import { middleware } from "../utilis/middleware.js"

const orderRouter = express.Router()

orderRouter.post("/paymentSubmit", paymentSubmit)
orderRouter.post("/orderCreate",middleware, orderCreate)
orderRouter.get("/orderGetAll",middleware, orderGetAll)
orderRouter.get("/orderGetAllForAdmin", orderGetAllForAdmin)
orderRouter.get("/singleOrderGet/:id",middleware, singleOrderGet)
orderRouter.get("/singleOrderGetForAdmin/:id", singleOrderGetForAdmin)
orderRouter.delete("/orderDelete/:id",middleware, orderDelete)



export default orderRouter