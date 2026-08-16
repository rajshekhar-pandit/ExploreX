import React, { useEffect, useState } from 'react';
import axios from 'axios';
import routingApi from './routing';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function UserTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const dataaa = await axios.get(routingApi.getAllUsers.url);
      setData(dataaa.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${routingApi.deleteSingleUser.url}${id}`);
        getAllUsers();
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      }
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto', marginTop: '100px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User List</h2>

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
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Mobile</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Image</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => (
              <tr key={user._id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{index + 1}</td>
                <td style={{ padding: '10px' }}>{user.name}</td>
                <td style={{ padding: '10px' }}>{user.email}</td>
                <td style={{ padding: '10px' }}>{user.mobile}</td>
                <td style={{ padding: '10px' }}>
                  <img
                    src={user.prevImg}
                    alt="User"
                    style={{ height: '35px', width: '35px', borderRadius: '20px' }}
                  />
                </td>
                <td style={{ padding: '10px' }}>
                  <Link to={`/Profile/${user._id}`}>
                    <button
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
                  </Link>
                  <button
                    onClick={() => deleteHandler(user._id)}
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
              <td colSpan="6" style={{ padding: '15px', textAlign: 'center', color: '#999' }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
