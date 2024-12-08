import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ViewDetails = () => {
    const product = useLoaderData();

    return (

        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="w-10/12 mx-auto my-10">
                <h1 className="text-4xl font-bold text-center mb-8">{product.name}</h1>
                <div className="w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1">
                    <div>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="mx-auto w-2/3 shadow-md"
                        />
                    </div>
                    <div className="mt-5">
                        <h2 className="text-lg mb-2"><strong>Category:</strong> {product.categoryName}</h2>
                        <p className="text-lg mb-2">
                            <strong>Price:</strong> ${product.price}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Rating:⭐</strong> {product.rating} 
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Stock Status:</strong> {product.stockStatus}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Customization:</strong> {product.customization}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Processing Time:</strong> {product.processingTime}
                        </p>
                        <p className="text-lg">
                            <strong>Description:</strong> {product.description}
                        </p>
                        <p>
                            <Link className='btn btn-neutral mt-5 mr-4' to='/'>Back Home</Link>
                            <Link className='btn btn-neutral mt-5' to='/allequipment'>All Equipment</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
