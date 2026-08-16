import productModel from "../model/productModel.js"
import { getBaseUrl, imageUpload } from "../utilis/helperFile.js";


export const productCreate = async (req, res) => {
    try {
        if (req.files && req.files.image.name) {
            const image = req.files.image;
            if (image) req.body.image = imageUpload(image, "productImages");
        }
        const data = await productModel.create({ ...req.body, image: req.body.image })
        return res.json({
            success: true,
            status: 200,
            message: "Product created successfully",
            body: data
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
export const productGet = async (req, res) => {
    try {
        const data = await productModel.find().sort({_id:-1})
        const baseUrl = getBaseUrl(req)
        const result=data?.map((e)=>({
            ...e?.toObject(),
            prevImg:`${baseUrl}/images/productImages/${e?.image}`
        }))
        return res.json({
            success: true,
            status: 200,
            message: "Here is all products",
            body: result
        })
    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: []
        })
    }
}
export const productGetSingle = async (req, res) => {
    try {
        const data = await productModel.findById({ _id: req.params.id })
        const baseUrl = getBaseUrl(req)
        return res.json({
            success: true,
            status: 200,
            message: "Here is single products",
            body: {...data.toObject(),
                prevImg:`${baseUrl}/images/productImages/${data?.image}`
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
export const productUpdateGetSingle = async (req, res) => {
    try {
        if (req.files && req.files.image.name) {
            const image = req.files.image;
            if (image) req.body.image = imageUpload(image, "productImages");
        }
        const data = await productModel.findByIdAndUpdate({ _id: req.params.id },
            { ...req.body, image: req.body.image },{new:true})
        return res.json({
            success: true,
            status: 200,
            message: "Product get updated",
            body: data
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
export const productDeleteSingle = async (req, res) => {
    try {
        const data = await productModel.findByIdAndDelete({ _id: req.params.id })
        return res.json({
            success: true,
            status: 200,
            message: "Product is deleted",
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

