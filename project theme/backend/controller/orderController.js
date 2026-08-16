import Stripe from 'stripe';
import orderr from '../model/orderModel.js';

const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null;
  }

  return new Stripe(process.env.STRIPE_SECRET_KEY);
};

export const paymentSubmit = async (req, res) => {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return res.status(500).send({ error: 'Stripe is not configured' });
    }

    const { amount } = req.body;
    if (!amount) {
      return res.status(400).send({ error: 'Amount is required' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'inr',
      payment_method_types: ['card'],

    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};


export const orderCreate = async (req, res) => {
  try {
    const productIds = Array.isArray(req.body.products) ? req.body.products : [];

    const charactersAndNumbers = "abcdefghijklmnopqrstuvwxyz1234567890";
    const length = 10;
    let result = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersAndNumbers.length);
        result += charactersAndNumbers[randomIndex];
    }

    const data = await orderr.create({
      ...req.body,
      userId: req.user._id,
      orderId:result,
      products: productIds.map(id => ({ productId: id }))
    })

    return res.json({
      success: true,
      status: 200,
      message: "Order created successfully",
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

export const orderGetAll = async (req, res) => {
  try {
    const data = await orderr.find({userId: req.user._id}).populate("products.productId").populate("userId")

    return res.json({
      success: true,
      status: 200,
      message: "Orders fetched",
      body: data
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
export const orderGetAllForAdmin = async (req, res) => {
  try {
    const data = await orderr.find().populate("products.productId").populate("userId")

    return res.json({
      success: true,
      status: 200,
      message: "All orders",
      body: data
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

export const singleOrderGet = async (req, res) => {
  try {
    const data = await orderr.findById({_id:req.params.id})

    return res.json({
      success: true,
      status: 200,
      message: "Here is single order",
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
export const singleOrderGetForAdmin = async (req, res) => {
  try {
    const data = await orderr.findById({_id:req.params.id}).populate("products.productId").populate("userId")

    return res.json({
      success: true,
      status: 200,
      message: "Here is single order",
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

export const orderDelete = async (req, res) => {
  try {
  await orderr.findByIdAndDelete({_id:req.params.id})

    return res.json({
      success: true,
      status: 200,
      message: "Order is deleted successfully",
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
