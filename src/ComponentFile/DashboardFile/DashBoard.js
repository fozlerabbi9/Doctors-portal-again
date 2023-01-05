import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../HookFile/useAdmin';

const DashBoard = () => {
    const lUser = useAuthState(auth);
    // const user = lUser[0]
    const [admin] = useAdmin(lUser);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                {/* <p>page content</p> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-2 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {/* <li className='mb-1' > <Link to={"myAppointment"}>My Appointment</Link> </li> */}
                    <li className='mb-1' > <Link to={"/dashboard"}>My Appointment</Link> </li>
                    {admin && <li className='mb-1'> <Link to={"allUsers"}>AllUsers</Link> </li>}
                    <li className='mb-1' > <Link to={"reviews"}>Reviews</Link> </li>
                    <li className='mb-1'> <Link to={"MyHistory"}>MyHistory</Link> </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;