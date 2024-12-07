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
        path: '/myequipment',
        element: <MyEquipment></MyEquipment> ,
    },
    {
        path: '/viewDetails',
        element: <ViewDetails></ViewDetails>,
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
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
            fetch(`http://localhost:5000/equipment/${params.id}`),
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
        element: <Profile></Profile>,
    },
    {
        path: '*',
        element: <h1>Error 404</h1>
    },

])


export default router;

