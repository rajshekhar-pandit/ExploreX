import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routingApi from './routing';
import { toast } from 'react-toastify';

function Signup() {

    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value, files } = e.target;
        let imageFile;


        if (name === "image" && files.length > 0) {
            imageFile = files[0];
        }

        setData((prevData) => ({
            ...prevData,
            [name]: name === "image" ? imageFile : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("mobile", data.mobile);
            formData.append("password", data.password);

            // Check if the image is correctly appended
            if (data.image) {
                formData.append("image", data.image); // Only append if image exists
            } else {
                console.log("No image file selected");
            }

            // Log FormData for debugging
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const res = await axios.post(`${routingApi.signUp.url}`, formData);
            toast.success(res.data.message);
            navigate("/Login");
        } catch (error) {
            console.log(error, "Error");
        }
    };


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
                                src="assets/images/a4.jpg"
                                alt="Signup visual"
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
                                Join Us
                            </h4>
                            <h2
                                style={{
                                    color: "rgb(7, 56, 66)",
                                    fontFamily: "Viga, sans-serif"
                                }}
                                data-aos="fade-left" // AOS attribute for animation
                                data-aos-delay="800" // Delay before animation starts
                            >
                                Create Your Account
                            </h2>

                            <form data-aos="fade-up" data-aos-delay="1000" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#222" }}>Name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        className="form-control"
                                        placeholder="Enter your name"
                                        data-aos="fade-right" // AOS attribute for animation
                                        data-aos-delay="1200" // Delay before animation starts
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#222" }}>Email</label>
                                    <input
                                        type="email"
                                        name='email'
                                        className="form-control"
                                        placeholder="Enter your email"
                                        data-aos="fade-left" // AOS attribute for animation
                                        data-aos-delay="1400" // Delay before animation starts
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#222" }}>Mobile</label>
                                    <input
                                        type="number"
                                        name='mobile'
                                        className="form-control"
                                        placeholder="Create a password"
                                        data-aos="fade-right" // AOS attribute for animation
                                        data-aos-delay="1600" // Delay before animation starts
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#222" }}>Password</label>
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control"
                                        placeholder="Create a password"
                                        data-aos="fade-right" // AOS attribute for animation
                                        data-aos-delay="1600" // Delay before animation starts
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" style={{ color: "#222" }}>Image</label>
                                    <input
                                        type="file"
                                        name='image'
                                        className="form-control"
                                        data-aos="fade-right" // AOS attribute for animation
                                        data-aos-delay="1600" // Delay before animation starts
                                        onChange={handleChange}

                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    style={{ backgroundColor: "rgb(233, 62, 23)", border: "none" }}
                                    data-aos="zoom-in" // AOS attribute for animation
                                    data-aos-delay="1800" // Delay before animation starts
                                >
                                    Sign Up
                                </button>
                            </form>
                           
                                <p
                                    className="mt-3"
                                    style={{ color: "#8c919d" }}
                                    data-aos="fade-up" // AOS attribute for animation
                                    data-aos-delay="2000" // Delay before animation starts
                                >
                                    Already have an account?  <Link to={"/Login"}style={{ color: "rgb(7, 56, 66)" }}>Login</Link>
                                </p>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;