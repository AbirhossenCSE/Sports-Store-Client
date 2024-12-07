import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';

const MyEquipment = () => {
    const { user } = useContext(AuthContext);
    const [myEquipment, setMyEquipment] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/equipment`)
                .then((res) => res.json())
                .then((data) => {
                    setMyEquipment(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="w-10/12 mx-auto my-4">
                <h1 className="text-3xl font-bold text-center mb-6">My Equipment</h1>
                {myEquipment.length === 0 ? (
                    <p className="text-center text-gray-500">No equipment found for your account.</p>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-6">
                        {myEquipment.map((item) => (
                            <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-xl font-bold text-center mb-2">{item.name}</h2>
                                <p className="text-gray-600 text-center">Category: {item.categoryName}</p>
                                <p className="text-gray-600 text-center">Price: ${item.price}</p>
                                <p className="text-gray-600 text-center">Rating: {item.rating} ⭐</p>
                                <p className="text-gray-600 text-center">Stock: {item.stockStatus}</p>
                                <p className="text-gray-600 text-center">Email: {item?.userEmail}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyEquipment;
