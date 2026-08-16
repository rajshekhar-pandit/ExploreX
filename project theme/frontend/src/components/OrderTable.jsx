import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routingApi from './routing';

function OrderTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const resulttt = await axios.get(routingApi.orderGetAllForAdmin.url);
      setData(resulttt.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto', marginTop: '100px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Order List</h2>

      <div style={{ marginBottom: '15px', textAlign: 'right' }}>
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
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Order ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Mobile</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Items</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Quantity</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Total (₹)</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((e, index) => (
              <tr key={e?._id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{index + 1}</td>
                <td style={{ padding: '10px' }}>{e?.orderId}</td>
                <td style={{ padding: '10px' }}>{e?.name}</td>
                <td style={{ padding: '10px' }}>{e?.email}</td>
                <td style={{ padding: '10px' }}>{e?.phone}</td>
                <td style={{ padding: '10px' }}>
                  {e?.products.map((ele) => {
                    const productName = ele?.productId?.name;
                    return Array.isArray(productName) ? productName.join(", ") : productName || "UNKNOWN";
                  }).join(", ")}
                </td>
                <td style={{ padding: '10px' }}>{e?.quantity}</td>
                <td style={{ padding: '10px' }}>₹ {e?.totalAmount}</td>
                <td style={{ padding: '10px' }}>
                  <button
                    onClick={() => navigate(`/OrderView/${e?._id}`)}
                    style={{
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
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ padding: '15px', textAlign: 'center', color: '#999' }}>
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
