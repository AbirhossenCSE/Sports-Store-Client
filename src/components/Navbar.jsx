// import React, { useContext } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';
// import { FaRegUser } from 'react-icons/fa';

// const Navbar = () => {

//     const { user, LogOut } = useContext(AuthContext)
//     const location = useLocation();


//     const links = <>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/allequipment"> All Equipment</NavLink></li>
//         <li><NavLink to="/addequipment">Add Equipment</NavLink></li>
//         <li><NavLink to="/myequipment"> My Equipment</NavLink></li>
//     </>

//     return (
//         <div className='w-10/12 mx-auto'>
//             <div className="navbar bg-base-100">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             {links}
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl">EquiSports</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {links}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <div className="relative group w-8 h-8 mr-5">
//                         {user?.email ? (
//                             <div className="flex flex-col items-center">
//                                 <img
//                                     className="w-8 h-8 rounded-full cursor-pointer"
//                                     src={user?.photoURL}
//                                     alt="User Profile"
//                                 />
//                                 <p className="absolute left-[-104px] bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     {user?.displayName}
//                                 </p>
//                             </div>
//                         ) : (
//                             // <img src={UserIcon} alt="" />
//                             <FaRegUser />
//                         )}
//                     </div>

//                     {user && user?.email ? (
//                         <button onClick={LogOut} className="btn btn-neutral rounded-lg">
//                             LogOut
//                         </button>
//                     ) : (
//                         <Link to="/auth/login" className="btn btn-neutral rounded-lg">
//                             Login
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const location = useLocation();

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allequipment">All Equipment</NavLink></li>
            <li><NavLink to="/addequipment">Add Equipment</NavLink></li>
            <li><NavLink to="/myequipment">My Equipment</NavLink></li>
        </>
    );

    return (
        <div className="w-10/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">EquiSports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="relative group w-8 h-8 mr-5">
                        {user?.email ? (
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                    src={user?.photoURL || 'https://via.placeholder.com/150'}
                                    alt={user?.displayName || 'User Profile'}
                                />
                                <p className="absolute left-[-104px] bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {user?.displayName || 'Anonymous User'}
                                </p>
                            </div>
                        ) : (
                            <FaRegUser />
                        )}
                    </div>
                    {user && user?.email ? (
                        <button onClick={LogOut} className="btn btn-neutral rounded-lg">
                            LogOut
                        </button>
                    ) : (
                        <Link to="/auth/login" className="btn btn-neutral rounded-lg">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
