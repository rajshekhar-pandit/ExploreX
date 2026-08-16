import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    image: { type: String, default: "" },
    sellingPrice: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    type: { type: Number, default: 0 }, //0-adventure 1-explore
    total: { type: Number, default: 0 },
}, { timestamps: true });

const productModel = mongoose.model("product", productSchema);
export default productModel;
