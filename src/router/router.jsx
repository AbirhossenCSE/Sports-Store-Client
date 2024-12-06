import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children:[
            
        ]
       
    },

])


export default router;

