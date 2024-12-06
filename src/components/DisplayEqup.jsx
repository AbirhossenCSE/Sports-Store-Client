import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from './equipmentCard';

const DisplayEqup = () => {
    const equipments = useLoaderData();

    const [loadedEquipments, SetLoadedEqiupments] = useState(equipments);
    

    return (
        <div className='w-10/12 mx-auto'>
            <h2>Welcome Coffee home: {loadedEquipments.length}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 '>
                {
                   loadedEquipments.map(equipment => <EquipmentCard
                    equipment={equipment} 
                    loadedEquipments={loadedEquipments}
                    SetLoadedEqiupments={SetLoadedEqiupments}
                    key={equipment._id}
                   ></EquipmentCard> ) 
                }
            </div>
        </div>
    );
};

export default DisplayEqup;