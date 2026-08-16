import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routingApi from './routing';

function ProductView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${routingApi.singleProduct.url}${id}`);
                setData(response.data.body);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [id]);

    if (!data) {
        return (
            <div style={{ padding: 20, textAlign: 'center' }}>
                Loading...
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: 500,
                margin: '150px auto',
                padding: 20,
                border: '1px solid #ccc',
                borderRadius: 8,
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
        >
            <button
                onClick={() => navigate('/ProductTable')}
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

            {data.prevImg && (
                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                    <img
                        src={data.prevImg}
                        alt={data.name}
                        style={{
                            width: 120,
                            height: 120,
                            objectFit: 'cover',
                            borderRadius: '50%',
                            border: '3px solid #ccc',
                        }}
                    />
                </div>
            )}

            <div style={{ textAlign: 'center' }}>
                <h3 style={{ margin: '10px 0', color: '#333' }}>Product Name</h3>
                <p style={{ fontWeight: 'bold', fontSize: 18, color: '#F28123', marginBottom: 20 }}>
                    {data.name}
                </p>

                <h3 style={{ margin: '10px 0', color: '#333' }}>Product Price</h3>
                <p style={{ fontWeight: 'bold', fontSize: 18, color: '#F28123' }}>
                    ₹ {data.sellingPrice}
                </p>
                <h3 style={{ margin: '10px 0', color: '#333' }}>Product Type</h3>
                <p style={{ fontWeight: 'bold', fontSize: 18, color: '#F28123' }}>
                     {data.type===0?"Adventure":"Explore"}
                </p>
            </div>
        </div>
    );
}

export default ProductView;
