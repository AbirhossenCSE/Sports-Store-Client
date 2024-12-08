import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EquipmentCard from './equipmentCard';
import { Fade } from 'react-awesome-reveal';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const DisplayEqup = () => {
    const [loadedEquipments, setLoadedEquipments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        <div className="w-10/12 mx-auto mt-10">
            <Fade direction="down" triggerOnce>
                <h1 className="text-3xl font-bold text-center mb-6">
                    Featured Equipment
                </h1>
            </Fade>
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
                    <button data-tooltip-id="my-tooltip"
                        data-tooltip-content="Clock this button to view All Sports product" className="btn btn-neutral px-10">View All</button>
                </Link>
                <Tooltip id="my-tooltip" place="top" effect="solid" />
            </div>
        </div>
    );
};

export default DisplayEqup;

