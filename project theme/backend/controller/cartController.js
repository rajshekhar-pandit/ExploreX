import cartt from "../model/cartModel.js"
import { getBaseUrl } from "../utilis/helperFile.js";


export const addToCart = async (req, res) => {
    try {
        const data = await cartt.create({ ...req.body, userId: req.user._id, status: 1 })
        return res.json({
            success: "true",
            status: 200,
            message: "Succesfully added to cart",
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

// export const getAllCart = async (req, res) => {
//     try {
//         const data = await cartt.find({ userId: req.user._id }).populate("productId").populate("userId")
//         return res.json({
//             success: "true",
//             status: 200,
//             message: "Here is all items",
//             body: data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getAllCart = async (req, res) => {
  try {
    const data = await cartt.find({ userId: req.user._id })
      .populate("productId")
      .populate("userId");
    const baseUrl = getBaseUrl(req);

    // Modify each cart item to add prevImg inside productId
    const updatedData = data.map(item => {
      if (item.productId && item.productId.image) {
        // Construct the full image URL
        const imageUrl = `${baseUrl}/images/productImages/${item.productId.image}`;
        // Add prevImg property inside productId
        return {
          ...item.toObject(), // convert mongoose doc to plain object
          productId: {
            ...item.productId.toObject(),
            prevImg: imageUrl,
          }
        };
      }
      return item;
    });

    return res.json({
      success: "true",
      status: 200,
      message: "Here is all items",
      body: updatedData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: "false", message: "Server error", body: [] });
  }
};


export const updateStatusInCart = async (req, res) => {
    try {
        const data = await cartt.updateMany({ userId: req.user._id, status: 0 })
        return res.json({
            success: "true",
            status: 200,
            message: "status Updated",
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

export const deleteCart = async (req, res) => {
    try {
        const data = await cartt.deleteMany({ userId: req.user._id })
        return res.json({
            success: "true",
            status: 200,
            message: "Item deleted",
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
export const deleteSingleCartItem = async (req, res) => {
    try {
        const data = await cartt.deleteOne({ _id: req.params.id })
        return res.json({
            success: "true",
            status: 200,
            message: "Item deleted",
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
export const updateCart = async (req, res) => {
    try {
        const data = await cartt.findByIdAndUpdate({ _id: req.params.id },
            { quantity: req.body.quantity },
            { raw: true })
        return res.json({
            success: "true",
            status: 200,
            message: "Items updated",
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
