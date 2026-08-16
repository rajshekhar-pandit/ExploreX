import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routingApi from './routing';

function Profile() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userRes, dataRes] = await Promise.all([
                    axios.get(`${routingApi.getSingleUser.url}${id}`),
                    axios.get(`${routingApi.allUserDataToAdmin.url}${id}`)
                ]);
                setUser(userRes.data.body);
                setData(dataRes.data.body);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
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
                margin: '250px auto',
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

            {user.prevImg && (
                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                    <img
                        src={user.prevImg}
                        alt={user.name}
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
                <h3 style={{ margin: '10px 0', color: '#333' }}>Name</h3>
                <p style={{ fontWeight: 'bold', fontSize: 18, color: '#F28123', marginBottom: 10 }}>
                    {user.name}
                </p>

                <h3 style={{ margin: '10px 0', color: '#333' }}>Mobile</h3>
                <p style={{ fontWeight: 'bold', fontSize: 16, color: '#555', marginBottom: 10 }}>
                    {user.mobile}
                </p>

                <h3 style={{ margin: '10px 0', color: '#333' }}>Email</h3>
                <p style={{ fontWeight: 'bold', fontSize: 16, color: '#555', marginBottom: 20 }}>
                    {user.email}
                </p>

                {console.log(user,"user")}
            </div>
        </div>
    );
}

export default Profile;
