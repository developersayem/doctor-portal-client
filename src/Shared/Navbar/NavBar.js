import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const manuItems = <>
        <li><Link to='/home' className='rounded-xl  hover:text-info hover:scale-110 bg-transparent'>Home</Link></li>
        <li><Link to='/about' className='rounded-xl  hover:text-info hover:scale-110 bg-transparent'>About</Link></li>
        <li><Link to='/appointment' className='rounded-xl  hover:text-info hover:scale-110 bg-transparent'>Appointment</Link></li>
        <li><Link to='/reviews' className='rounded-xl  hover:text-info hover:scale-110 bg-transparent'>Reviews</Link></li>
        <li><Link to='/contactUs' className='rounded-xl  hover:text-info hover:scale-110 bg-transparent'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <Link className="font-bold normal-case text-xl ml-10 hover:scale-110 bg-transparent  ">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;