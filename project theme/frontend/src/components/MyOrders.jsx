import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import routingApi from './routing'
import cookie from "js-cookie"

function MyOrders() {
    const token = JSON.parse(cookie.get("userInfo"));
    const navigate = useNavigate()
    const [data, setData] = useState([])

    const getOrders = async () => {
        try {
            const response = await axios.get(routingApi.orderGetAll.url, {
                headers: {
                    "Authorization": `Bearer ${token?.token}`
                }
            })
            console.log(response,"response")
            setData(response.data.body)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div style={{ padding: '20px', maxWidth: '95%', margin: 'auto', marginTop: '100px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Orders</h2>

            <div style={{ marginBottom: '15px', textAlign: 'right' }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        padding: '8px 15px',
                        backgroundColor: '#555',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    ← Back
                </button>
            </div>

            <div style={{
                overflowX: 'auto',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
                {data.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                {[
                                    "#", "Order ID", "Name", "Email", "Mobile", "Address",
                                    "Date", "Time", "Product(s)", "Quantity", "Price",
                                    "Subtotal", "Shipping", "Total"
                                ].map((header, i) => (
                                    <th key={i} style={{ padding: '10px', borderBottom: '1px solid #ddd', whiteSpace: 'nowrap' }}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, index) => (
                                <tr key={e._id} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '10px' }}>{index + 1}</td>
                                    <td style={{ padding: '10px' }}>{e.orderId}</td>
                                    <td style={{ padding: '10px' }}>{e.name}</td>
                                    <td style={{ padding: '10px' }}>{e.email}</td>
                                    <td style={{ padding: '10px' }}>{e.phone}</td>
                                    <td style={{ padding: '10px' }}>{e.address}</td>
                                    <td style={{ padding: '10px' }}>{new Date(e.createdAt).toLocaleDateString()}</td>
                                    <td style={{ padding: '10px' }}>
                                        {new Date(e.createdAt).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </td>
                                    <td style={{ padding: '10px' }}>
                                        {e.products?.map((p) => p?.productId?.name || "N/A").join(", ")}
                                    </td>
                                    <td style={{ padding: '10px' }}>{e.quantity}</td>
                                    <td style={{ padding: '10px' }}>
                                        {e.products?.map((p) => `₹${p?.productId?.sellingPrice}`).join(", ")}
                                    </td>
                                    <td style={{ padding: '10px' }}>₹{e.totalAmount}</td>
                                    <td style={{ padding: '10px' }}>₹20</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>₹{e.totalAmount + 20}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                        There are no orders yet.
                    </p>
                )}
            </div>
        </div>
    )
}

export default MyOrders

