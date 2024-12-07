import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';

const AllEquipment = () => {
    const equipment = useLoaderData();

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="w-10/12 mx-auto m-4">
                <h1 className="text-3xl font-bold text-center mb-6">All Equipment</h1>
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse w-full bg-white shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="border p-4">#</th>
                                <th className="border p-4">Name</th>
                                <th className="border p-4">Category</th>
                                <th className="border p-4">Price</th>
                                <th className="border p-4">Rating</th>
                                <th className="border p-4">Stock Status</th>
                                <th className="border p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(equipment) && equipment.length > 0 ? (
                                equipment.map((item, index) => (
                                    <tr key={item.id || index} className="hover:bg-gray-100">
                                        <td className="border p-4">{index + 1}</td>
                                        <td className="border p-4">{item.name}</td>
                                        <td className="border p-4">{item.categoryName}</td>
                                        <td className="border p-4">${item.price}</td>
                                        <td className="border p-4">⭐ {item.rating}</td>
                                        <td className="border p-4">{item.stockStatus}</td>
                                        <td className="border p-4">
                                            <Link to={`/viewDetails/${item._id}`}>
                                                <button className="btn w-full">View Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center text-gray-200 p-4">
                                        No equipment available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllEquipment;
