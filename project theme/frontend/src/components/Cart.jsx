import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cookie from "js-cookie"
import routingApi from './routing';
import axios from 'axios';
function Cart() {
   const token = JSON.parse(cookie.get("userInfo"));
    const [loading, setLoading] = useState(true)

    const [usecartdata, setUsecartdata] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (!token?.token) {
            navigate("/")
        }
        else {
            axios.get(routingApi.getAllCart.url, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            }).then((res) => {
                console.log(res,"resss")
                setUsecartdata(res.data.body || [])
                setLoading(false)

            })
        }
    }, [token?.token])

    const handleIncrement = async (id, currentQuantity) => {
        const newQuantity = currentQuantity + 1;
        try {

            const response = await axios.put(`${routingApi.updateCart.url}${id}`, {
                quantity: newQuantity,
            }, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            });

            if (response.status === 200) {
                // Update the local state
                const updatedCart = usecartdata.map((item) =>
                    item._id === id ? { ...item, quantity: newQuantity } : item
                );
                setUsecartdata(updatedCart);
            }
        } catch (error) {
            console.error("Error updating quantity", error);
        }
    };

    const handleDecrement = async (id, currentQuantity) => {
        if (currentQuantity <= 1) return; // Ensure quantity doesn't go below 1
        const newQuantity = currentQuantity - 1;
        try {
            const response = await axios.put(`${routingApi.updateCart.url}${id}`, {
                quantity: newQuantity,
            }, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            });
            if (response.status === 200) {
                // Update the local state
                const updatedCart = usecartdata.map((item) =>
                    item._id === id ? { ...item, quantity: newQuantity } : item
                );
                setUsecartdata(updatedCart);
            }
        } catch (error) {
            console.error("Error updating quantity", error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${routingApi.deleteSingleCartItem.url}${id}`, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            });

            if (response.status === 200) {
                const updatedCart = usecartdata.filter((item) => item._id !== id);
                window.location.reload()
                setUsecartdata(updatedCart);
            }
        } catch (error) {
            console.error("Error updating quantity", error);
        }
    };


    const subTotal = usecartdata?.reduce((total, item) => {
        return total + (item?.quantity * item?.productId?.sellingPrice);
    }, 0);

    return (
        <>
            <div
                className="cart-wrapper mt_bgtempconatainer"
                id="cart"
                data-aos="fade-in"
                data-aos-duration="600"
            >
                <div className="container" data-aos="fade-up" data-aos-duration="600">
                    <h2
                        className="pp-heading text-center editableElement mb-5"
                        style={{ color: "#fff", backgroundColor: "transparent", marginTop: "100px" }}
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        Your Shopping Cart
                    </h2>
                    <div className="row">
                        {/* Cart Items */}
                        <div
                            className="col-lg-8 col-md-12"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <div className="cart-items-box p-4 bg-dark text-white rounded-3 shadow">
                                <h4 className="mb-4">Items in Your Cart</h4>
                                {usecartdata.map((item) => (
                                    <div
                                        key={item.id}
                                        className="cart-item d-flex align-items-center justify-content-between mb-3"
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item?.productId?.prevImg}
                                                alt={item?.productId?.name}
                                                className="me-3"
                                                style={{ width: "60px", borderRadius: "10px" }}
                                            />
                                            <div>
                                                <h6>{item.name}</h6>
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        className="btn btn-sm btn-outline-light me-2"
                                                        onClick={() => handleDecrement(item?._id,item?.quantity)}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{item?.quantity}</span>
                                                    <button
                                                        className="btn btn-sm btn-outline-light ms-2"
                                                        onClick={() => handleIncrement(item?._id,item?.quantity)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">{item?.productId?.name}</div>
                                        <div className="price">₹ {(item?.quantity * item?.productId?.sellingPrice).toFixed(2)}</div>
                                        <button onClick={(()=>handleDelete(item?._id))}>Delete</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cart Summary */}
                        <div
                            className="col-lg-4 col-md-12"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <div className="cart-summary-box p-4 bg-secondary text-white rounded-3 shadow">
                                <h4 className="mb-4">Cart Summary</h4>
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Subtotal</span>
                                        <span>₹ {subTotal}</span>
                                    </li>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Shipping</span>
                                        <span>₹ 10.00</span>
                                    </li>
                                    <li className="d-flex justify-content-between fw-bold mt-3">
                                        <span>Total</span>
                                        <span>₹ {(parseFloat(subTotal) + 10).toFixed(2)}</span>
                                    </li>
                                </ul>
                                <Link
                                    to="/checkout"
                                    className="pp-btn mt-4 w-100 btn btn-primary"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;