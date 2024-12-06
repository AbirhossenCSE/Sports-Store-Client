import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AddEquipment from '../components/AddEquipment';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {

            },
        ]

    },
    {
        path: 'addequipment',
        element: <AddEquipment></AddEquipment>,
    },

])


export default router;

