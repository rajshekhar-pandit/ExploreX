import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import routingApi from './routing';

function Dashboard() {

    const [count, setCount] = useState(0)

    const getItemsCount = async () => {
        try {
            const result = await axios.get(routingApi.countForDashboard.url)
            setCount(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getItemsCount()
    }, [])

    return (
        <div className="container py-5" id="DashboardSection" style={{marginTop:"150px"}}>
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h2
                        className="fw-bold"
                        style={{ color: "#073842", fontSize: "2.5rem", letterSpacing: "1px" }}
                    >
                        Admin Dashboard
                    </h2>
                    <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                        Overview of system activity
                    </p>
                </div>
            </div>

            <div className="row gy-4">
                {/* Users Card */}
                <div className="col-md-6 col-lg-4">
                    <Link to="/UserTable" className="text-decoration-none" style={{ cursor: "pointer" }}>
                        <div
                            className="card shadow h-100 py-3"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            style={{
                                backgroundColor: "green",
                                border: "none",
                                borderRadius: "1rem",
                                color: "white",
                                transition: "transform 0.3s ease, background-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "green";
                                e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "green";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="card-title mb-1">Users</h5>
                                    <h3 className="card-text">{count?.users}</h3>
                                </div>
                                <i className="fa fa-users fa-3x" aria-hidden="true"></i> {/* 👤 Users Icon */}
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Products Card */}
                <div className="col-md-6 col-lg-4">
                    <Link to="/ProductTable" className="text-decoration-none" style={{ cursor: "pointer" }}>
                        <div
                            className="card shadow h-100 py-3"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            style={{
                                backgroundColor: "#2563EB",
                                border: "none",
                                borderRadius: "1rem",
                                color: "white",
                                transition: "transform 0.3s ease, background-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#3B82F6";
                                e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#2563EB";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="card-title mb-1">Products</h5>
                                    <h3 className="card-text">{count?.products}</h3>
                                </div>
                                <i className="fa fa-cubes fa-3x" aria-hidden="true"></i> {/* 📦 Products Icon */}
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Orders Card */}
                <div className="col-md-6 col-lg-4">
                    <Link to="/OrderTable" className="text-decoration-none" style={{ cursor: "pointer" }}>
                        <div
                            className="card shadow h-100 py-3"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            style={{
                                backgroundColor: "red",
                                border: "none",
                                borderRadius: "1rem",
                                color: "white",
                                transition: "transform 0.3s ease, background-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "red";
                                e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "red";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="card-title mb-1">Orders</h5>
                                    <h3 className="card-text">{count?.orders}</h3>
                                </div>
                                <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i> {/* 🛒 Orders Icon */}
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
