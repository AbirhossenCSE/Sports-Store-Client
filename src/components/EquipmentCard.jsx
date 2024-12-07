import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment, loadedEquipments, SetLoadedEqiupments }) => {
    const { _id, name, categoryName, price, rating, processingTime, stockStatus, customization, imageUrl, description } = equipment;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 p-2">
            <figure>
                <img
                    className='p-2 mx-auto'
                    src={imageUrl}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div className='m-2'>
                    <p className='mb-2'><strong>Name:</strong> {name}</p>
                    <p className='mb-2'><strong>Category</strong> {categoryName}</p>
                    <p className='mb-2'><strong>Price:</strong> {price}</p>
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn btn-neutral w-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;