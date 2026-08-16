import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routingApi from './routing';
import cookie from "js-cookie";
import { toast } from 'react-toastify';
function Checkout() {

  const token = JSON.parse(cookie.get("userInfo"));
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [orderCreate, setOrderCreate] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    products: []
  });
  const navigate = useNavigate();

  // Updated handleChangeOfOrder function
  const handleChangeOfOrder = (e) => {
    setOrderCreate({ ...orderCreate, [e.target.name]: e.target.value });
  };

  // Function to calculate subtotal
  const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.quantity * item.productId.sellingPrice), 0);
  };

  const handleSubmitOfOrder = async (e) => {
    e.preventDefault();
    try {
      const dataOfProductIds = cart?.map((items) => items?.productId?._id);
      const dataOfProductIdsFromProduct = product?.map((items) => items?._id);
      const commonProductIds = dataOfProductIdsFromProduct.filter(productId => dataOfProductIds.includes(productId));
      const totalQuantity = cart?.reduce((acc, item) => acc + item?.quantity, 0);

      const updateProducts = {
        ...orderCreate,
        products: commonProductIds,
        quantity: totalQuantity,
        totalAmount: subTotal // Ensure subTotal is calculated before this point
      };

      const res = await axios.post(routingApi.orderCreate.url, updateProducts, {
        headers: {
          "Authorization": `Bearer ${token?.token}`
        }
      });

      setOrderCreate(res.data.body);
      await axios.delete(routingApi.deleteCart.url, {
        headers: {
          "Authorization": `Bearer ${token?.token}`
        }
      });
      toast.success("Order is placed successfully");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getCartData = async () => {
    try {
      const data = await axios.get(routingApi.getAllCart.url, {
        headers: {
          "Authorization": `Bearer ${token?.token}`
        }
      });
      setCart(data?.data?.body);
      const subtotal = calculateSubtotal(data?.data?.body);
      if (subtotal > 0) {
        setLoading(false); // Stop loading if subtotal is valid
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductData = async () => {
    try {
      const data = await axios.get(routingApi.getAllProducts.url, {
        headers: {
          "Authorization": `Bearer ${token?.token}`
        }
      });
      setProduct(data?.data?.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartData();
    getProductData();
  }, []);

  const subTotal = calculateSubtotal(cart); // Calculate subtotal

  return (
    <section className="checkout-wrapper py-5 mt_bgtempconatainer" data-aos="fade-in" data-aos-duration="600">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-5 text-center">
          <div className="col-lg-12">
            <h4 className="text-danger" style={{ fontFamily: 'Viga, sans-serif' }}>
              Complete Your Purchase
            </h4>
            <h2 className="text-dark" style={{ fontFamily: 'Viga, sans-serif' }}>
              Checkout
            </h2>
          </div>
        </div>

        <div className="row gy-5">
          {/* Billing + Card Form */}
          <div className="col-lg-8">
            <form className="p-4 border rounded shadow-sm bg-white" onSubmit={handleSubmitOfOrder} onChange={handleChangeOfOrder}>
              <h5 className="mb-4">Billing Details</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" placeholder="First Name" name='name' className="form-control" />
                </div>
                {/* <div className="col-md-6">
                                    <input type="text" placeholder="Last Name" name='name'  className="form-control" />
                                </div> */}
                <div className="col-md-12">
                  <input type="email" placeholder="Email Address" name='email' className="form-control" />
                </div>
                <div className="col-md-12">
                  <input type="number" placeholder="Phone Number" name='phone' className="form-control" />
                </div>
                <div className="col-md-12">
                  <input type="text" placeholder="Address" name='address' className="form-control" />
                </div>
                {/* <div className="col-md-6">
                                    <input type="text" placeholder="City" name='name'  className="form-control" />
                                </div> */}
                {/* <div className="col-md-6">
                                    <input type="text" placeholder="Postal Code" name='name'  className="form-control" />
                                </div> */}
                {/* <div className="col-md-12">
                                    <textarea rows="3" className="form-control" placeholder="Additional Notes (Optional)" />
                                </div> */}
              </div>

              {/* <hr className="my-4" />

              <h5 className="mb-4">Card Details</h5>
              <div className="row g-3">
                <div className="col-md-12">
                  <input type="text" placeholder="Cardholder Name" className="form-control" />
                </div>
                <div className="col-md-12">
                  <input type="text" placeholder="Card Number" className="form-control" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="MM/YY" className="form-control" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="CVV" className="form-control" />
                </div>
              </div> */}
              <button type="submit" className="btn btn-danger w-100 mt-2">Place Order</button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h5 className="mb-4">Order Summary</h5>

              <ul className="list-group mb-3">
                {cart?.map((e) => (
                  <>
                    {console.log(e, "eee")}
                    <li className="list-group-item d-flex justify-content-between">
                      <span>{e?.productId?.name}</span>
                      <strong>₹ {e?.productId?.sellingPrice}</strong>
                    </li>

                  </>
                ))}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong className="text-danger">₹ {subTotal}</strong>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
