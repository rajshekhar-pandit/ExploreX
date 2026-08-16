import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartProvider';
import axios from 'axios';
import routingApi from './routing';
import cookie from "js-cookie";
import { toast } from 'react-toastify';

function Navbar() {
    const navigate = useNavigate()
    const getCookieUser = cookie.get("userInfo");
    const userInfo = getCookieUser ? JSON.parse(getCookieUser) : null;
    const location = useLocation(); // Get the current path
    const { cartCount, setCartCount } = useCart();
    const fetchCartData = async () => {
        if (userInfo?.token) {
            try {
                const res = await axios.get(routingApi.getAllCart.url, {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`,
                    },
                });
                if (res.data.status === 200) {
                    setCartCount(res.data.body.length);
                }
            } catch (error) {
                console.error("Error fetching cart data", error);
            }
        }
    };

    useEffect(() => {
        fetchCartData();
    }, [userInfo]);
    // Function to determine if a link is active
    const isActive = (path) => location.pathname === path;

    const logoutHandler = () => {
        cookie.remove("userInfo")
        navigate("/")
        toast.success("Logout Successfully")
    }

    return (
        <>
            <div
                className="pp-header-wrapper mt_bgtempconatainer pp-header-fixed"
                id="Yb6rOpcPvrBlyKWO"
                style={{ position: "absolute", left: 0, top: 0 }}
            >
                <div className="container">
                    <div className="pp-header-parent">
                        <div className="pp-header-inner">
                            <div className="pp-brand-logo">
                                <Link to="/">
                                    <img
                                        src="assets/images/logo.png"
                                        alt="Auralyn Escape"
                                        className="editableElement"
                                    />
                                </Link>
                                <div className="pp-toggle-btn">
                                    <span mt_bgtempconatainer="" />
                                    <span mt_bgtempconatainer="" />
                                    <span mt_bgtempconatainer="" />
                                </div>
                            </div>
                            <div className="pp-navbar-menu">
                                <ul className="menu mt_bgtempconatainer">
                                    <li>
                                        <Link
                                            to="/"
                                            className="editableElement"
                                            style={{
                                                color: isActive("/") ? "red" : "rgb(255, 255, 255)",
                                            }}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            className="editableElement"
                                            style={{
                                                color: isActive("/about") ? "red" : "rgb(255, 255, 255)",
                                            }}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/adventure"
                                            className="editableElement"
                                            style={{
                                                color: isActive("/adventure") ? "red" : "rgb(255, 255, 255)",
                                            }}
                                        >
                                            Adventure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/shop"
                                            className="editableElement"
                                            style={{
                                                color: isActive("/shop") ? "red" : "rgb(255, 255, 255)",
                                            }}
                                        >
                                            Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog"
                                            className="editableElement"
                                            style={{
                                                color: isActive("/blog") ? "red" : "rgb(255, 255, 255)",
                                            }}
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            to="/contact"
                                            className="editableElement"
                                            style={{
                                                color: isActive("/contact") ? "red" : "rgb(255, 255, 255)",
                                            }}
                                        >
                                            Contact
                                        </Link>
                                    </li> */}
                                    {userInfo?.isAdmin === 0 ? <li>
                                        <Link
                                            to="/Dashboard"
                                            className="editableElement"
                                            style={{
                                                color: isActive("/Dashboard") ? "red" : "rgb(255, 255, 255)",
                                            }}
                                        >
                                            Admin Dashboard
                                        </Link>
                                    </li> : ""}
                                    {userInfo?.isAdmin === 1 ?
                                        <>

                                            <li>
                                                <Link
                                                    to="/MyOrders"
                                                    className="editableElement"
                                                    style={{
                                                        color: isActive("/MyOrders") ? "red" : "rgb(255, 255, 255)",
                                                    }}
                                                >
                                                    My Orders
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/cart"
                                                    className="editableElement"
                                                    style={{
                                                        color: isActive("/cart") ? "red" : "rgb(255, 255, 255)",
                                                        position: "relative",
                                                        display: "inline-block",
                                                        paddingRight: "1.5rem",
                                                    }}
                                                >
                                                    Cart
                                                    {cartCount > 0 && (
                                                        <span
                                                            style={{
                                                                position: "absolute",
                                                                top: "27px",
                                                                right: "5px",
                                                                backgroundColor: "red",
                                                                color: "white",
                                                                borderRadius: "50%",
                                                                padding: "2px 6px",
                                                                fontSize: "0.75rem",
                                                                fontWeight: "bold",
                                                                lineHeight: 1,
                                                            }}
                                                        >
                                                            {cartCount ? cartCount : 0}
                                                        </span>
                                                    )}
                                                </Link>
                                            </li>


                                        </> : ""
                                    }


                                    {!userInfo ? <>
                                        <li>
                                            <Link
                                                to="/signup"
                                                className="editableElement"
                                                style={{
                                                    color: isActive("/signup") ? "red" : "rgb(255, 255, 255)",
                                                }}
                                            >
                                                SignUp
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/login"
                                                className="editableElement"
                                                style={{
                                                    color: isActive("/login") ? "red" : "rgb(255, 255, 255)",
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </li>
                                    </> : <li>
                                        <button
                                            onClick={logoutHandler}
                                            className="editableElement flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-red-100 hover:text-red-600 transition-colors duration-300"
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: 'inherit',
                                            }}
                                        >
                                            <i className="fas fa-right-from-bracket"></i>
                                            Logout
                                        </button>
                                    </li>}





                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;