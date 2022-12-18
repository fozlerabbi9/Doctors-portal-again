import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './NavBar.css';

const NaveBar = () => {
    const user = useAuthState(auth);
    const photoUrl = user[0]?.photoUR;
    // const photoUrl = user[0]?.photoURL;
    const userNameFirstLetter = user[0]?.displayName?.slice(0, 1).toUpperCase()
    // console.log(user[0])
    // console.log(photoUrl)
    // console.log(userNameFirstLetter)
    // console.log(response.status)
    const logOutFun = () => {
        // signOut(auth);
        signOut(auth)
    }
    const navLink = <>
        <li> <Link className='navLink-style' to={"/"}>Home</Link> </li>
        <li> <Link className='navLink-style' to={"about"}>About</Link> </li>
        <li> <Link className='navLink-style' to={"appointment"} >Appointment</Link> </li>
        <li> <Link className='navLink-style' to={"dashboard"} >Dashboard</Link> </li>
        <li> <Link className='navLink-style' to={"bloge"}>Bloge</Link> </li>
        {
            user[0] ? <li> <Link onClick={logOutFun} className='navLink-style'> <p className='text-red-600 font-semibold '>Log-Out</p> </Link> </li> :
                <li> <Link className='navLink-style' to={"login"}>Login</Link> </li>
        }
        {
            photoUrl ? <li className='w-12 ml-2 rounded-full' >  <img className='w-auto p-0 rounded-full ' src={photoUrl} alt="" />  </li> :
                userNameFirstLetter && <li ><Link className='navLink-style bg-slate-900 rounded-full text-xl'>{userNameFirstLetter}</Link> </li>
        }
    </>;
    return (
        <div>
            <div className="navbar bg-neutral px-10">

                <div className="navbar-start">
                    {/* <div className="navbar-start w-5/12"> */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className=''>
                        {/* <div className='navbar-center'> */}
                        <li className='list-none '> <Link className='' to={"/"}> <h2 className='title-style' data-text="DoctorsPortal">DoctorsPortal</h2></Link> </li>
                        {/* <li className='list-none'> <Link className='title-style' to={"/"}>Doctors Portal</Link> </li> */}
                    </div>

                </div>

                <div className="navbar-canter w-8/12 hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    {/* <label tabIndex={1} htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menue</label>
                </div>

            </div>
        </div>
    );
};

export default NaveBar;