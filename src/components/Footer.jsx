import React, { useContext } from 'react';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Footer = () => {



    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 mt-10">
            <nav className="grid grid-flow-col gap-4">
                <Link to='/' className='mr-2'>Home</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaTwitter />
                    </a>
                    <a>
                        <IoLogoYoutube />
                    </a>
                    <a>
                        <FaFacebookSquare />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by EquiSports Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;