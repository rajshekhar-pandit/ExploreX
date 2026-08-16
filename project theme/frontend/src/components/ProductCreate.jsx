import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import routingApi from './routing';

function ProductCreate() {
    const [data, setData] = useState({
        name: '',
        image: null,
        type: 0,
        sellingPrice: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setData({ ...data, image: files[0] });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('sellingPrice', data.sellingPrice);
            formData.append("type", data.type);
            formData.append('image', data.image);

            await axios.post(routingApi.productCreate.url, formData);
            navigate('/ProductTable');
        } catch (error) {
            console.error(error);
        }
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8, marginTop: "100px" }}>
            <button
                onClick={handleBackClick}
                style={{
                    marginBottom: 20,
                    background: 'none',
                    border: 'none',
                    color: '#007BFF',
                    cursor: 'pointer',
                    fontSize: 14,
                }}
            >
                &larr; Back
            </button>

            <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Create Product</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 15 }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: 5 }}>
                        Product Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={data.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
                    />
                </div>

                <div style={{ marginBottom: 15 }}>
                    <label htmlFor="image" style={{ display: 'block', marginBottom: 5 }}>
                        Product Image
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        required
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: 25 }}>
                    <label htmlFor="sellingPrice" style={{ display: 'block', marginBottom: 5 }}>
                        Product Price (₹)
                    </label>
                    <input
                        id="sellingPrice"
                        name="sellingPrice"
                        type="number"
                        required
                        value={data.sellingPrice}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
                        min="0"
                    />
                </div>
                <div style={{ marginBottom: 25 }}>
                    <label htmlFor="type" style={{ display: 'block', marginBottom: 5 }}>
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={data.type}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: 8,
                            fontSize: 16,
                            borderRadius: 4,
                            border: '1px solid #ccc',
                        }}
                    >
                        <option value="">-- Select Type --</option>
                        <option value="0">Adventure</option>
                        <option value="1">Explore</option>
                    </select>
                </div>


                <button
                    type="submit"
                    style={{
                        width: '100%',
                        backgroundColor: '#E54646',
                        color: 'white',
                        padding: 12,
                        fontSize: 16,
                        border: 'none',
                        borderRadius: 4,
                        cursor: 'pointer',
                    }}
                >
                    Create Product
                </button>
            </form>
        </div>
    );
}

export default ProductCreate;
