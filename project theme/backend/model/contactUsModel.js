import mongoose from "mongoose"

const contactUsModel = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    subject: { type: String, default: "" },
    message: { type: String, default: "" },
}, { timestamps: true })

const contactUsSchema = mongoose.model("contactUs", contactUsModel)

export default contactUsSchema