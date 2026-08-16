import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routingApi from './routing';

function OrderView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    const getOrders = async () => {
        try {
            const response = await axios.get(`${routingApi.singleOrderGetForAdmin.url}${id}`);
            setData(response.data.body);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    if (!data || Object.keys(data).length === 0) {
        return (
            <div style={{ padding: 20, textAlign: 'center' }}>
                Loading...
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: 600,
                margin: '100px auto',
                padding: 20,
                border: '1px solid #ccc',
                borderRadius: 8,
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
        >
            <button
                onClick={() => navigate(-1)}
                style={{
                    marginBottom: 20,
                    background: 'none',
                    border: '1px solid #007BFF',
                    color: '#007BFF',
                    padding: '8px 16px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 14,
                }}
            >
                &larr; Back
            </button>

            <h2 style={{ marginBottom: 20, textAlign: 'center', color: '#333' }}>Order Summary</h2>

            <div style={{ display: 'grid', rowGap: '10px', marginBottom: 20 }}>
                <LabelValue label="Order ID" value={data?.orderId} />
                <LabelValue label="Name" value={data?.name} />
                <LabelValue label="Email" value={data?.email} />
                <LabelValue label="Mobile" value={data?.phone} />
                <LabelValue label="Address" value={data?.address} />
                <LabelValue label="Order Date" value={new Date(data?.createdAt).toLocaleDateString()} />
                <LabelValue label="Order Time" value={new Date(data?.createdAt).toLocaleTimeString()} />
            </div>

            <h3 style={{ margin: '20px 0 10px', color: '#333' }}>Products</h3>
            <ul style={{ paddingLeft: 0, listStyleType: 'none' }}>
                {data?.products?.map((product, index) => (
                    <li key={index} style={{ marginBottom: 15, borderBottom: '1px solid #eee', paddingBottom: 10 }}>
                        <LabelValue label="Product" value={product?.productId?.name} />
                        <LabelValue label="Price" value={`₹ ${product?.productId?.sellingPrice || 0}`} />
                        <LabelValue label="Quantity" value={product?.quantity || 1} />
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: 20 }}>
                <LabelValue label="Subtotal" value={`₹ ${data?.totalAmount || 0}`} />
                <LabelValue label="Shipping" value="₹ 20" />
                <LabelValue label="Total" value={`₹ ${(data?.totalAmount || 0) + 20}`} />
            </div>
        </div>
    );
}

// Reusable component for horizontal label-value pairs
function LabelValue({ label, value }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <strong style={{ color: '#555' }}>{label}:</strong>
            <span style={{ fontWeight: 'bold', color: '#F28123' }}>{value || 'N/A'}</span>
        </div>
    );
}

export default OrderView;
