import React, { useContext } from 'react';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Footer = () => {
    const { user } = useContext(AuthContext);

    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 mt-10">
            <nav className="grid grid-flow-col gap-4">
                <Link to='/' className='mr-2 font-bold text-2xl'>EqiuSports</Link>
            </nav>
            <aside>
                {user ? (
                    <div className="text-center">
                        <p className="font-bold">Contact</p>
                        <p>Name: {user.displayName || 'Anonymous User'}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ) : (
                    <p className="text-center">Log in to view contact information.</p>
                )}
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={28} />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoYoutube size={28} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare size={28} />
                    </a>
                </div>
            </nav>
            <aside className="mt-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by EquiSports Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;
