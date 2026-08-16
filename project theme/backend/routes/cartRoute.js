import express from "express"
import { addToCart, deleteCart, deleteSingleCartItem, getAllCart, updateCart, updateStatusInCart } from "../controller/cartController.js"
import { middleware } from "../utilis/middleware.js"

const cartRouter = express.Router()

cartRouter.post("/addToCart",middleware, addToCart)
cartRouter.get("/getAllCart",middleware, getAllCart)
cartRouter.put("/updateStatusInCart",middleware, updateStatusInCart)
cartRouter.delete("/deleteCart",middleware, deleteCart)
cartRouter.delete("/deleteSingleCartItem/:id",middleware, deleteSingleCartItem)
cartRouter.put("/updateCart/:id",middleware, updateCart)

export default cartRouter