import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import routingApi from './routing';
import { toast } from 'react-toastify';
import cookie from "js-cookie"

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [data, setData] = useState("")

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            axios.post(routingApi.login.url, data).then((res) => {
                if (res.data.status == 200) {
                    console.log(res.data,"res.data")
                    setData(res.data.body)
                    cookie.set("userInfo", JSON.stringify(res.data.body))
                    navigate("/")
                    toast.success(`Hlo ${res.data.body.name} !  Login successfully `)
                } else {
                    toast.error(res.data.message)
                }

            })
        } catch (error) {
            console.log(error)
        }
    }



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    return (
        <div
            style={{
                marginTop: "150px",
                marginBottom: "150px",
            }}
            className="pp-login-wrapper mt_bgtempconatainer"
            data-aos="fade-in" // AOS attribute for animation
            data-aos-duration="1000" // Animation duration in milliseconds
        >
            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                <div className="row gy-4 align-items-center">
                    {/* Image Side */}
                    <div
                        className="col-lg-6 col-md-12"
                        data-aos="fade-right" // AOS attribute for animation
                        data-aos-delay="200" // Delay before animation starts
                    >
                        <div className="pp-login-left-img">
                            <img
                                src="assets/images/a2.jpg"
                                alt="Login visual"
                                className="img-fluid"
                                style={{ borderRadius: "20px", boxShadow: "0 5px 20px rgba(0,0,0,0.2)" }}
                                data-aos="zoom-in" // AOS attribute for animation
                                data-aos-delay="400" // Delay before animation starts
                            />
                        </div>
                    </div>

                    {/* Form Side */}
                    <div
                        className="col-lg-6 col-md-12"
                        data-aos="fade-left" // AOS attribute for animation
                        data-aos-delay="200" // Delay before animation starts
                    >
                        <div
                            className="pp-login-form p-4"
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "20px",
                                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
                            }}
                            data-aos="fade-up" // AOS attribute for animation
                            data-aos-delay="400" // Delay before animation starts
                        >
                            <h4
                                style={{
                                    color: "rgb(233, 62, 23)",
                                    fontFamily: "Viga, sans-serif"
                                }}
                                data-aos="fade-right" // AOS attribute for animation
                                data-aos-delay="600" // Delay before animation starts
                            >
                                Welcome Back
                            </h4>
                            <h2
                                style={{
                                    color: "rgb(7, 56, 66)",
                                    fontFamily: "Viga, sans-serif"
                                }}
                                data-aos="fade-left" // AOS attribute for animation
                                data-aos-delay="800" // Delay before animation starts
                            >
                                Login to Your Account
                            </h2>

                            <form data-aos="fade-up" data-aos-delay="1000" onChange={handleChange} onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#222" }}>Email</label>
                                    <input
                                        type="email"
                                        name='email'
                                        className="form-control"
                                        placeholder="Enter your email"
                                        data-aos="fade-right" // AOS attribute for animation
                                        data-aos-delay="1200" // Delay before animation starts
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#222" }}>Password</label>
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control"
                                        placeholder="Enter your password"
                                        data-aos="fade-left" // AOS attribute for animation
                                        data-aos-delay="1400" // Delay before animation starts
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    style={{ backgroundColor: "rgb(233, 62, 23)", border: "none" }}
                                    data-aos="zoom-in" // AOS attribute for animation
                                    data-aos-delay="1600" // Delay before animation starts
                                >
                                    Login
                                </button>
                            </form>
                            
                                <p
                                    className="mt-3"
                                    style={{ color: "#8c919d" }}
                                    data-aos="fade-up" // AOS attribute for animation
                                    data-aos-delay="1800" // Delay before animation starts
                                >
                                    Don't have an account? <Link to={"/signup"} style={{ color: "rgb(7, 56, 66)" }}>Sign up</Link>
                                </p>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;