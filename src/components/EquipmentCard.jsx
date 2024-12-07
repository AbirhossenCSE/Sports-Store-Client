import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment, loadedEquipments, SetLoadedEqiupments }) => {
    const { _id, name, categoryName, price, rating, processingTime, stockStatus, customization, imageUrl, description } = equipment;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 p-2">
            <figure>
                <img
                    className='p-2'
                    src={imageUrl}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div className='p-2 m-2'>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Category</strong> {categoryName}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;