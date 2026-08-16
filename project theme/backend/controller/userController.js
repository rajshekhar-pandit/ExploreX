import cartt from "../model/cartModel.js"
import contactUsSchema from "../model/contactUsModel.js"
import orderr from "../model/orderModel.js"
import productModel from "../model/productModel.js"
import userModel from "../model/userModel.js"
import { getBaseUrl, imageUpload } from "../utilis/helperFile.js"
import jwtTokenSign from "../utilis/jwtToken.js"
import bycrypt from "bcrypt"
const saltRound = 10

const signUp = async (req, res) => {
    try {
        const validationU = await userModel.findOne({ email: req.body.email })
        if (validationU !== null) {
            return res.json({
                success: false,
                status: 400,
                message: "Email already exist",
                body: {}
            })
        } else {
            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageUpload(image, "userImage");
            }
            const passwordEncrypt = await bycrypt.hash(req.body.password, saltRound)
            console.log(req.body.password,"jkjkjik")
            console.log(passwordEncrypt,"passwordEncrypt")
            const data = await userModel.create({ ...req.body, password: passwordEncrypt, image: req.body.image })
            const tokenData = await jwtTokenSign({ _id: data._id })
            data.token = tokenData.token
            data.loginTime = tokenData.decoded.iat
            res.json({
                success: true,
                status: 200,
                message: "User created succesfully",
                body: data
            })
        }
    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}
const editUserDetail = async (req, res) => {
    try {
        if (req.files && req.files.image?.name) {
            const image = req.files.image;
            if (image) req.body.image = imageUpload(image, "userImage");
        }

        if (req.body.password) {
            req.body.password = await bycrypt.hash(req.body.password, saltRound);
        } else {
            const existingUser = await userModel.findById(req.params.id);
            req.body.password = existingUser.password;
        }
        const data = await userModel.findByIdAndUpdate(
            { _id: req.params.id },
            { ...req.body, image: req.body.image },
            { new: true }
        );

        res.json({
            success: true,
            status: 200,
            message: `${data?.name} data updated successfully`,
            body: data
        });

    } catch (error) {
        console.log(error, "error");
        return res.json({
            success: false,
            status: 400,
            message: error.message || "An error occurred",
            body: {}
        });
    }

}

const login = async (req, res) => {
    console.log(req.body)
    try {
        const findEmail = await userModel.findOne({ email: req.body.email })
        if (findEmail == null) {
            res.json({
                success: false,
                status: 400,
                message: "Email is not valid",
                body: {}
            })
        } else {
            const passwordVerify = await bycrypt.compare(req.body.password, findEmail.password)
            if (passwordVerify == false) {
                res.json({
                    success: false,
                    status: 400,
                    message: "Password is not correct",
                    body: {}
                })
            } else {
                const data = await userModel.findOne({ email: req.body.email })
                const tokenUpdate = await jwtTokenSign(data._id)
                const baseUrl = getBaseUrl(req)
                data.token = tokenUpdate.token
                data.loginTime = tokenUpdate.decoded.iat
                res.json({
                    success: true,
                    status: 200,
                    message: "Login successfully",
                    body: {
                        ...data.toObject(),
                        image: `${data?.image}`,
                        prevImg: `${baseUrl}/images/userImage/${data?.image}`
                    }
                })
            }
        }
    } catch (error) {
        res.json({
            success: false,
            status: 400,
            message: "error",
            body: {}
        })
    }
}

const getAllUser = async (req, res) => {
    try {
        const data = await userModel.find({isAdmin:1}).sort({_id:-1})
        const baseUrl = getBaseUrl(req)

        const usersData= data?.map((e)=>({
            ...e.toObject(),
            prevImg:`${baseUrl}/images/userImage/${e?.image}`
        }))
        return res.json({
            success: true,
            status: 200,
            message: "Here is all users",
            body: usersData
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: []
        })
    }
}


const getSingleUser = async (req, res) => {
    try {
        const data = await userModel.findById(req.params.id)
        const baseUrl = getBaseUrl(req)
        return res.json({
            success: true,
            status: 200,
            message: "Here is user",
            body: {
                ...data.toObject(),
                image: `${data?.image}`,
                prevImg: `${baseUrl}/images/userImage/${data?.image}`


            }
        })
    } catch (error) {
        console.log(error, "error")
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}

const deleteSingleUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete({ _id: req.params.id })
        return res.json({
            success: true,
            status: 200,
            message: "User Deleted successfully",
            body: {}
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}

const adminLogin = async (req, res) => {
    try {
        const findEmail = await userModel.findOne({ email: req.body.email, isAdmin: 0 })
        if (findEmail == null) {
            res.json({
                success: false,
                status: 400,
                message: "You are not authorized as admin",
                body: {}
            })
        } else {
            const passwordVerify = await bycrypt.compare(req.body.password, findEmail.password)
            if (passwordVerify == false) {
                res.json({
                    success: false,
                    status: 400,
                    message: "Password is not correct",
                    body: {}
                })
            } else {
                const data = await userModel.findOne({ email: req.body.email })
                const tokenUpdate = await jwtTokenSign(data._id)
                const baseUrl = getBaseUrl(req)
                data.token = tokenUpdate.token
                data.loginTime = tokenUpdate.decoded.iat
                res.json({
                    success: true,
                    status: 200,
                    message: "Login successfully",
                    body: {
                        ...data.toObject(),
                        image: `${data?.image}`,
                        prevImg: `${baseUrl}/images/userImage/${data?.image}`

                    }
                })

            }
        }
    } catch (error) {
        res.json({
            success: false,
            status: 400,
            message: "error",
            body: {}
        })
    }
}

const allUserDataToAdmin=async(req,res)=>{
    try {
        const getAllProducts=await productModel.find()
        const getAllOrdersDetail=await orderr.find({userId:req.params.id})
        const getAllCartItems=await cartt.find({userId:req.params.id})
       return res.json({
            success: true,
            status: 200,
            message: "Here is all user data",
            body: {
               products:getAllProducts,
               orders:getAllOrdersDetail,
               cart:getAllCartItems

            }
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}

const countForDashboard=async(req,res)=>{
    try {
        const userCount=await userModel.find({isAdmin:1}).countDocuments()
        const productCount=await productModel.find().countDocuments()
        const orderCount=await orderr.find().countDocuments()
        const contactUsCount=await contactUsSchema.find().countDocuments()
        return res.json({
            users:userCount,
            products:productCount,
            orders:orderCount,
            contactUs:contactUsCount,
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}


export default { signUp, login, adminLogin, getAllUser, getSingleUser, deleteSingleUser, editUserDetail ,allUserDataToAdmin,countForDashboard}
