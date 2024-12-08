import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EquipmentCard from './equipmentCard';

const DisplayEqup = () => {
    const [loadedEquipments, setLoadedEquipments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch only 6 products
        fetch('https://sports-equipment-store-server-fawn.vercel.app/equipment?limit=6')
            .then((res) => res.json())
            .then((data) => {
                setLoadedEquipments(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>;
    }

    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Equipment</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                {loadedEquipments.map((equipment) => (
                    <EquipmentCard
                        equipment={equipment}
                        key={equipment._id}
                    />
                ))}
            </div>
            <div className="text-center mt-6">
                <Link to="/allequipment">
                    <button className="btn btn-primary">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default DisplayEqup;

