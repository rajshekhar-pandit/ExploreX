import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routingApi from './routing';

function ProductEdit() {
  const [data, setData] = useState({
    name: "",
    sellingPrice: "",
    type: 0,
    image: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const productGetSingle = async () => {
      try {
        const res = await axios.get(`${routingApi.singleProduct.url}${id}`);
        setData(res.data.body);
      } catch (error) {
        console.error(error);
      }
    };
    productGetSingle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("sellingPrice", data.sellingPrice);
    formData.append("type", data.type);
    formData.append("image", data.image);

    try {
      await axios.put(`${routingApi.productUpdateGetSingle.url}${id}`, formData);
      navigate("/ProductTable");
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        maxWidth: 450,
        margin: "150px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: 24, color: "#333" }}>Edit Product</h2>
        <button
          onClick={handleBackClick}
          style={{
            background: "none",
            border: "none",
            color: "#4f46e5",
            cursor: "pointer",
            fontSize: 14,
            padding: 0,
          }}
        >
          &larr; Go Back
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: 5, fontWeight: "bold", color: "#555" }}>
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 14,
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <label htmlFor="sellingPrice" style={{ display: "block", marginBottom: 5, fontWeight: "bold", color: "#555" }}>
            Selling Price
          </label>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#777",
                fontSize: 14,
              }}
            >
              ₹
            </span>
            <input
              id="sellingPrice"
              name="sellingPrice"
              type="number"
              value={data.sellingPrice || ""}
              onChange={handleChange}
              placeholder="Selling Price"
              required
              style={{
                width: "100%",
                padding: "8px 10px 8px 25px",
                borderRadius: 4,
                border: "1px solid #ccc",
                fontSize: 14,
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: 25 }}>
                   <label htmlFor="sellingPrice" style={{ display: "block", marginBottom: 5, fontWeight: "bold", color: "#555" }}>
Type          </label>
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

        {/* {typeof data.image === "string" && (
          <div style={{ marginBottom: 15 }}>
            <p style={{ marginBottom: 5, color: "#666", fontSize: 14 }}>Current Image</p>
            <img
              src={data.image}
              alt="Current Product"
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 6,
                border: "1px solid #ccc",
              }}
            />
          </div>
        )} */}

        <div style={{ marginBottom: 25 }}>
          <label htmlFor="image" style={{ display: "block", marginBottom: 5, fontWeight: "bold", color: "#555" }}>
            Upload New Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{
              width: "100%",
              fontSize: 14,
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 0",
           backgroundColor: '#E54646',
            color: "white",
            fontWeight: "bold",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
