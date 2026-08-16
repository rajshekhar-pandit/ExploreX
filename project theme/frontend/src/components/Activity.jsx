import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import routingApi from './routing';
import { toast } from 'react-toastify';
import cookie from 'js-cookie';
import { useCart } from './CartProvider';
import Client from './Client';

function Activity() {

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
                className="pp-activity-wrapper mt_bgtempconatainer"
                id="NSHNYdNJStnVXHlF"
                data-aos="fade-in" // AOS attribute for animation
                data-aos-duration="600" // Animation duration in milliseconds
            >
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12"
                            data-aos="fade-up" // AOS attribute for animation
                            data-aos-duration="600" // Animation duration in milliseconds
                        >
                            <div className="pp-activity-heading">
                                <h4
                                    className="pp-top-heading editableElement"
                                    data-kindoff="text"
                                    data-og-fg-color="rgb(233, 62, 23)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Viga, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                    style={{
                                        color: "rgb(233, 62, 23)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                >
                                    select your activity
                                </h4>
                                <h2
                                    className="pp-heading editableElement"
                                    data-kindoff="text"
                                    data-og-fg-color="rgb(7, 56, 66)"
                                    data-og-bg-color="rgba(0, 0, 0, 0)"
                                    data-df-font="Viga, sans-serif"
                                    onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                    onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                    style={{
                                        color: "rgb(7, 56, 66)",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}
                                >
                                    Our Top Picks This Summer
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {/* {[
                            {
                                title: "kayaking and canoeing",
                                price: "start from $120.00",
                                img: "assets/images/a1.jpg",
                            },
                            {
                                title: "axe throwing",
                                price: "start from $100.00",
                                img: "assets/images/a2.jpg",
                            },
                            {
                                title: "nets adventure",
                                price: "start from $150.00",
                                img: "assets/images/a4.jpg",
                            },
                            {
                                title: "tree climbing",
                                price: "start from $70.00",
                                img: "assets/images/a3.jpg",
                            },
                            {
                                title: "forest segway",
                                price: "start from $150.00",
                                img: "assets/images/a5.jpg",
                            },
                            {
                                title: "camping",
                                price: "start from $110.00",
                                img: "assets/images/a6.jpg",
                            },
                        ].map((activity, index) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                                data-aos="fade-up" // AOS attribute for animation
                                data-aos-delay={index * 100} // Delay for staggered animation
                            >
                                <div className="pp-activity-box">
                                    <div className="pp-service-img">
                                        <img
                                            src={activity.img}
                                            alt=""
                                            className="editableElement"
                                            data-kindoff="image"
                                            data-og-fg-color="rgb(36, 40, 45)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Ubuntu, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                            style={{
                                                color: "rgb(36, 40, 45)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="pp-activity-content mt_bgtempconatainer"
                                        data-aos="zoom-in" // AOS attribute for animation
                                        data-aos-delay={index * 100} // Delay for staggered animation
                                    >
                                        <h4
                                            className="editableElement"
                                            data-kindoff="text"
                                            data-og-fg-color="rgb(255, 255, 255)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Viga, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        >
                                            {activity.title}
                                        </h4>
                                        <p
                                            className="editableElement"
                                            data-kindoff="text"
                                            data-og-fg-color="rgb(255, 255, 255)"
                                            data-og-bg-color="rgba(0, 0, 0, 0)"
                                            data-df-font="Ubuntu, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgba(0, 0, 0, 0)"
                                            }}
                                        >
                                            {activity.price}
                                        </p>
                                        <a
                                            href="javascript:;"
                                            className="pp-btn editableElement"
                                            data-kindoff="text"
                                            data-og-fg-color="rgb(255, 255, 255)"
                                            data-og-bg-color="rgb(233, 62, 23)"
                                            data-df-font="Ubuntu, sans-serif"
                                            onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                            onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgb(233, 62, 23)"
                                            }}
                                        >
                                            explore
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))} */}

                        {products
                            .filter((e) => e.type === 1) // Fix: Added return by using arrow shorthand
                            .map((product, index) => (
                                <div
                                    className="col-lg-4 col-md-6"

                                    data-aos="fade-up" // AOS attribute for animation
                                    data-aos-delay="100" // Delay for staggered animation
                                >
                                    <div className="pp-activity-box">
                                        <div className="pp-service-img">
                                            <img
                                                src={product?.prevImg}
                                                alt=""
                                                className="editableElement"
                                                data-kindoff="image"
                                                data-og-fg-color="rgb(36, 40, 45)"
                                                data-og-bg-color="rgba(0, 0, 0, 0)"
                                                data-df-font="Ubuntu, sans-serif"
                                                onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                                onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                                style={{
                                                    color: "rgb(36, 40, 45)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="pp-activity-content mt_bgtempconatainer"
                                            data-aos="zoom-in" // AOS attribute for animation
                                            data-aos-delay="100" // Delay for staggered animation
                                        >
                                            <h4
                                                className="editableElement"
                                                data-kindoff="text"
                                                data-og-fg-color="rgb(255, 255, 255)"
                                                data-og-bg-color="rgba(0, 0, 0, 0)"
                                                data-df-font="Viga, sans-serif"
                                                onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                                onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                                style={{
                                                    color: "rgb(255, 255, 255)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                                }}
                                            >
                                                {product?.name}
                                            </h4>
                                            <p
                                                className="editableElement"
                                                data-kindoff="text"
                                                data-og-fg-color="rgb(255, 255, 255)"
                                                data-og-bg-color="rgba(0, 0, 0, 0)"
                                                data-df-font="Ubuntu, sans-serif"
                                                onmouseover="this.style.color=this.getAttribute('data-hfg-color'); this.style.backgroundColor =this.getAttribute('data-hbg-color');"
                                                onmouseout="this.style.color=this.getAttribute('data-og-fg-color'); this.style.backgroundColor=this.getAttribute('data-og-bg-color')"
                                                style={{
                                                    color: "rgb(255, 255, 255)",
                                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                                }}
                                            >
                                             ₹  {product?.sellingPrice}
                                            </p>
                                            <button
                                                
                                                className="pp-btn editableElement"
                                                data-kindoff="text"
                                                data-og-fg-color="rgb(255, 255, 255)"
                                                data-og-bg-color="rgb(233, 62, 23)"
                                                data-df-font="Ubuntu, sans-serif"
                                                
                                                style={{
                                                    color: "rgb(255, 255, 255)",
                                                    backgroundColor: "rgb(233, 62, 23)"
                                                }}
                                                onClick={() => handleAddToCart(product?._id)}
                                            >
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}



                    </div>
                </div>
            </div>
            <Client data-aos="fade-up" data-aos-duration="600" /> {/* AOS applied to Client */}
        </>
    );
}

export default Activity;