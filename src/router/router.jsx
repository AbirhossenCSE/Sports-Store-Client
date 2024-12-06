import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AddEquipment from '../components/AddEquipment';
import DisplayEqup from '../components/DisplayEqup';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/equipment'}></Navigate>
            },
            {
                path: '/equipment',
                element: <DisplayEqup></DisplayEqup>,
                loader: () => fetch('http://localhost:5000/equipment'),
            },
        ]

    },
    {
        path: 'addequipment',
        element: <AddEquipment></AddEquipment>,
    },

])


export default router;

