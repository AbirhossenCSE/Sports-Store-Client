import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AddEquipment from '../components/AddEquipment';
import DisplayEqup from '../components/DisplayEqup';
import AllEquipment from '../components/AllEquipment';


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
        path: '/addequipment',
        element: <AddEquipment></AddEquipment>,
    },
    {
        path: '/allequipment',
        element: <AllEquipment></AllEquipment>,
        loader: async () => {
            const res = await fetch('http://localhost:5000/equipment');
            if (!res.ok) {
              throw new Error('Failed to fetch equipment');
            }
            return res.json();
          },
    },
    {
        path: '*',
        element: <h1>Error 404</h1>
    },

])


export default router;

