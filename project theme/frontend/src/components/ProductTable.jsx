import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routingApi from './routing';
import Swal from 'sweetalert2';

function ProductTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get(routingApi.getAllProducts.url);
      setData(res.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${routingApi.productDeleteSingle.url}${id}`);
        getProductData();
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      }
    });
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto',marginTop:"100px" }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Product List</h2>

      <div style={{ marginBottom: '15px', textAlign: 'right' }}>
        <button
          onClick={() => navigate('/ProductCreate')}
          style={{
            padding: '8px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          + Add New Product
        </button>
        <button
          onClick={() => navigate('/dashboard')}
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

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>#</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Product Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Price (₹)</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Type</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((product, index) => (
              <tr key={product._id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{index + 1}</td>
                <td style={{ padding: '10px' }}>{product.name}</td>
                <td style={{ padding: '10px' }}>₹ {product.sellingPrice}</td>
                <td style={{ padding: '10px' }}>{product.type===0?"Adventure":"Explore"}</td>
                <td style={{ padding: '10px' }}>
                  <button
                    onClick={() => navigate(`/ProductView/${product._id}`)}
                    style={{
                      marginRight: '10px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/ProductEdit/${product._id}`)}
                    style={{
                      marginRight: '10px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHandler(product._id)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: '15px', textAlign: 'center', color: '#999' }}>
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
