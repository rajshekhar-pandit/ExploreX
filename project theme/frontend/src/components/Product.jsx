import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; import Activity from './Activity';
import axios from 'axios';
import routingApi from './routing';
import { toast } from 'react-toastify';
import cookie from 'js-cookie';
import { useCart } from './CartProvider';
function Product() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const navigate = useNavigate();
    const { setCartCount } = useCart();

    const getCookieAdmin = cookie.get('userInfo');
    const userInfo =getCookieAdmin? JSON.parse(getCookieAdmin):null;

    const fetchData = async () => {
        try {
            const res = await axios.get(routingApi.getAllProducts.url);
            setProducts(res.data.body);
            setLoading(false); // Stop loading after data is fetched
        } catch (err) {
            console.log(err);
            setLoading(false); // Stop loading in case of an error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            if (!userInfo) {
                toast.error('Please login first');
                return;
            }

            const cartResponse = await axios.get(routingApi.getAllCart.url, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });

            let cartItems = cartResponse.data.body;
            const existingProduct = cartItems.find(
                (item) => item?.productId?._id === productId
            );
            if (existingProduct) {
                const updatedQuantity = existingProduct.quantity + 1;

                await axios.put(
                    `${routingApi.updateCart.url}${existingProduct._id}`,
                    {
                        quantity: updatedQuantity,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${userInfo.token}`,
                        },
                    }
                );
                toast.success('Quantity updated in your cart');
            } else {
                await axios.post(
                    routingApi.addToCart.url,
                    {
                        productId,
                        quantity: 1,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${userInfo.token}`,
                        },
                    }
                );
                toast.success('Successfully added to your cart');
            }

            const updatedCartResponse = await axios.get(routingApi.getAllCart.url, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
            if (updatedCartResponse.data.status === 200) {
                setCartCount(updatedCartResponse.data.body.length);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };
    return (
        <>
            <div
                className="pp-product-wrapper mt_bgtempconatainer"
                id="shop"
                data-aos="fade-in"
                data-aos-duration="1000"
            >
                <div className="container">
                    <div
                        className="pp-advnt-idea-heading"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <h4
                            className="pp-top-heading editableElement"
                            style={{
                                color: "rgb(233, 62, 23)",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }}
                        >
                            Adventure Essentials
                        </h4>
                        <h1
                            className="pp-heading editableElement"
                            style={{
                                color: "rgb(7, 56, 66)",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }}
                        >
                            New Arrivals for Adventures
                        </h1>
                    </div>
                    <div className="row gy-4">
                        {products
                            .filter((e) => e.type === 0) // Fix: Added return by using arrow shorthand
                            .map((product, index) => (
                                <div
                                    className="col-lg-3 col-md-6"
                                    key={product.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200}
                                >
                                    <div className="pp-prdct-main mt_bgtempconatainer">
                                        <div className="pp-prdct-img">
                                            <img
                                                src={product.prevImg}
                                                alt={product.name}
                                                className="editableElement"
                                                style={{
                                                    color: "rgb(33, 37, 41)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                                }}
                                            />
                                        </div>
                                        <div className="pp-prdct-details">
                                            <h4
                                                className="editableElement"
                                                style={{
                                                    color: "rgb(34, 34, 34)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                                }}
                                            >
                                                {product.name}
                                            </h4>
                                            <h5
                                                className="editableElement"
                                                style={{
                                                    color: "rgb(255, 0, 0)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                                }}
                                            >
                                                ₹ {product.sellingPrice}
                                            </h5>
                                            <button
                                                onClick={() => handleAddToCart(product?._id)}
                                                className="pp-btn editableElement"
                                                style={{
                                                    color: "rgb(255, 255, 255)",
                                                    backgroundColor: "rgb(233, 62, 23)",
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
            <Activity data-aos="fade-up" data-aos-duration="600" />
        </>
    );
}

export default Product;