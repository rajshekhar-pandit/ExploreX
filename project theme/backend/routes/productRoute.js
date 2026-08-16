import express from "express"
import { productCreate, productDeleteSingle, productGet, productGetSingle, productUpdateGetSingle } from "../controller/productController.js"

const productRouter = express.Router()

productRouter.post("/productCreate", productCreate)
productRouter.get("/productGet", productGet)
productRouter.get("/productGetSingle/:id", productGetSingle)
productRouter.put("/productUpdateGetSingle/:id", productUpdateGetSingle)
productRouter.delete("/productDeleteSingle/:id", productDeleteSingle)

export default productRouter