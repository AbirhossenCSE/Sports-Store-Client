import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom';

const MyEquipment = () => {
    const { user } = useContext(AuthContext);
    const [myEquipment, setMyEquipment] = useState([]);
    const [loading, setLoading] = useState(true);

    const mydata = useLoaderData();

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/equipment/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipment has been deleted.",
                                icon: "success",
                            });

                            // Remove the deleted item from the state
                            const remainingEquipment = myEquipment.filter((item) => item._id !== id);
                            setMyEquipment(remainingEquipment);
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting data:', error);
                    });
            }
        });
    };

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/equipment`)
                .then((res) => res.json())
                .then((data) => {
                    const filteredData = data.filter((item) => item.userEmail === user.email);
                    setMyEquipment(filteredData);
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
                <h2> Current User Email: {user?.email}</h2>
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
                                <div className="text-center mt-4">
                                    
                                    <Link to={`/updatequipment/${item._id}`}>
                                        <button className="btn join-item">Edit</button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item._id)} // Pass the item's _id here
                                        className="btn bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyEquipment;
