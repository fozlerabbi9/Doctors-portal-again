import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NaveBar = () => {
    const navLink = <>
        <li> <Link className='navLink-style' to={"/"}>Home</Link> </li>
        <li> <Link className='navLink-style' to={"about"}>About</Link> </li>
        <li> <Link className='navLink-style' to={"appointment"} >Appointment</Link> </li>
        <li> <Link className='navLink-style' to={"bloge"}>Bloge</Link> </li>
        <li> <Link className='navLink-style' to={"login"}>Login</Link> </li>
    </>;
    return (
        <div>
            <div className="navbar bg-neutral px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className='navbar-center'>
                        <li className='list-none'> <Link className='title-style' to={"/"}>Doctors Portal</Link> </li>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NaveBar;