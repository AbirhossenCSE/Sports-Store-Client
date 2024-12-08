import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Fade } from 'react-awesome-reveal';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const AllEquipment = () => {
    const equipment = useLoaderData();
    const [sortedEquipment, setSortedEquipment] = useState(equipment);
    const [sortOrder, setSortOrder] = useState({ field: 'price', order: 'asc' }); // Default sorting field and order

    const handleSort = (field) => {
        const isAscending = sortOrder.field === field && sortOrder.order === 'asc';

        const sorted = [...sortedEquipment].sort((a, b) => {
            return isAscending ? a[field] - b[field] : b[field] - a[field];
        });

        // Update the sorting order and sorted list
        setSortOrder({ field, order: isAscending ? 'desc' : 'asc' });
        setSortedEquipment(sorted);
    };

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="w-10/12 mx-auto m-4">
                <Fade direction="down" triggerOnce>
                    <h1 className="text-3xl font-bold text-center mb-6">
                        All Equipment
                    </h1>
                </Fade>
                <div className="flex justify-end gap-2 mb-4">
                    {/* Sort Dropdown */}
                    <div className="dropdown dropdown-end">
                        <button
                            tabIndex={0}
                            className="btn dropdown-toggle"
                        >
                            Sort
                        </button>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <button
                                    onClick={() => handleSort('price')}
                                    className="btn btn-ghost"
                                >
                                    By Price (
                                    {sortOrder.field === 'price' && sortOrder.order === 'asc'
                                        ? 'Low to High'
                                        : 'High to Low'}
                                    )
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleSort('rating')}
                                    className="btn btn-ghost"
                                >
                                    By Rating (
                                    {sortOrder.field === 'rating' && sortOrder.order === 'asc'
                                        ? 'Low to High'
                                        : 'High to Low'}
                                    )
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse w-full shadow-md">
                        <thead>
                            <tr className="bg-gray-500 text-left">
                                <th className="border p-4">#</th>
                                <th className="border p-4">Name</th>
                                <th className="border p-4 hidden sm:table-cell">Category</th>
                                <th className="border p-4">Price</th>
                                <th className="border p-4 hidden sm:table-cell">Rating</th>
                                <th className="border p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(sortedEquipment) && sortedEquipment.length > 0 ? (
                                sortedEquipment.map((item, index) => (
                                    <tr key={item.id || index} className="hover:bg-gray-50 hover:text-black">
                                        <td className="border p-4">{index + 1}</td>
                                        <td className="border p-4">{item.name}</td>
                                        <td className="border p-4 hidden sm:table-cell">{item.categoryName}</td>
                                        <td className="border p-4">${item.price}</td>
                                        <td className="border p-4 hidden sm:table-cell">⭐ {item.rating}</td>
                                        <td className="border p-4">
                                            <Link to={`/viewDetails/${item._id}`}>
                                                <button data-tooltip-id="my-tooltip"
                                                    data-tooltip-content="Click this button to view details" className="btn btn-neutral w-full">View Details</button>
                                            </Link>
                                            <Tooltip id="my-tooltip" place="top" effect="solid" />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-gray-200 p-4">
                                        No equipment available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllEquipment;
