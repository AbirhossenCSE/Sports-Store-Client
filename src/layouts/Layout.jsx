import React from 'react';
import Navbar from '../components/Navbar';

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <header className='w-10/12 mx-auto'>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;