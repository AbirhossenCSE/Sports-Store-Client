import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AddEquipment from '../components/AddEquipment';
import DisplayEqup from '../components/DisplayEqup';
import AllEquipment from '../components/AllEquipment';
import ViewDetails from '../pages/ViewDetails';
import MyEquipment from '../pages/MyEquipment';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import Profile from '../components/Profile';
import UpdateEquip from '../pages/UpdateEquip';
import Error from '../pages/Error';


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
                loader: () => fetch('https://sports-equipment-store-server-fawn.vercel.app/equipment'),
            },
        ]

    },
    {
        path: '/addequipment',
        element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute> ,
    },
    {
        path: '/myequipment',
        element: <PrivateRoute><MyEquipment></MyEquipment></PrivateRoute> ,
        loader: () => fetch('https://sports-equipment-store-server-fawn.vercel.app/equipment')
    },
    {
        path: '/updatequipment/:id',
        element: <PrivateRoute><UpdateEquip></UpdateEquip></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://sports-equipment-store-server-fawn.vercel.app/equipment/${params.id}`)
      },
    {
        path: '/viewDetails',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
    },
    {
        path: '/allequipment',
        element: <AllEquipment></AllEquipment>,
        loader: async () => {
            const res = await fetch('https://sports-equipment-store-server-fawn.vercel.app/equipment');
            if (!res.ok) {
                throw new Error('Failed to fetch equipment');
            }
            return res.json();
        },
    },
    {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) =>
            fetch(`https://sports-equipment-store-server-fawn.vercel.app/equipment/${params.id}`),
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
    },
    {
        path: '*',
        element: <Error></Error>,
    },

])


export default router;

