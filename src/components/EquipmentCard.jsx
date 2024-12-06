import React from 'react';

const EquipmentCard = ({ equipment, loadedEquipments, SetLoadedEqiupments }) => {
    const {name, categoryName, price, rating, processingTime, stockStatus, customization, imageUrl, description} = equipment;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={imageUrl}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {categoryName}</p>
                    <p>Taste: {price}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn join-item">View</button>
                    {/* <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link> */}
                    {/* <button
                        onClick={() => handleDelete(_id)}
                        className="btn join-item bg-red-500">X</button> */}
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;