import express from "express"
import userController from "../controller/userController.js"

const router = express.Router()

router.post("/signUp", userController.signUp)
router.put("/editUserDetail/:id", userController.editUserDetail)
router.post("/login", userController.login)
router.get("/getAllUser", userController.getAllUser)
router.get("/getSingleUser/:id", userController.getSingleUser)
router.delete("/deleteSingleUser/:id", userController.deleteSingleUser)
router.post("/adminLogin", userController.adminLogin)
router.get("/countForDashboard", userController.countForDashboard)
router.get("/allUserDataToAdmin/:id", userController.allUserDataToAdmin)

export default router