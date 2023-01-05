import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../LoadingFile/Loading';

const AllUsers = () => {
    // const [users, setAllUsers] = useState([]);
    const user = useAuthState(auth);
    const userEmail = user[0].email;
    const navigate = useNavigate();

    const { data: datas, isLoading, refetch } = useQuery("users", () =>
        fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => res.json())
    )
    // console.log(datas)


    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Faild to make an admin")
                }
                return res.json()   // return না করলে (res.json()) কাজ হবে না  ,,, single line হলে return করা লাগত না
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("successfully make an admin");

                }

            })

    }

    const removeAdmin = email => {
        // console.log(email)
        // removeAdmin
        const procied = window.confirm("Are you sure to remove him/his form admin panale");
        if (procied) {
            fetch(`http://localhost:5000/removeAdmin/${email}`, {
                method: "PUT",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        if (userEmail === email) {
                            const procied = window.confirm("are you sure! you remove yourself in admin panale?");
                            if (procied) {
                                navigate("/")
                                // signOut(auth);
                            }
                        }
                        refetch();
                        toast.error("Remove to admin panale");
                    }
                })
        }


    }
    // console.log(data)

    return (
        <div className='w-full'>
            alll users =-- {datas?.length}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Email</th>
                            <th className='text-center' >Make Admin</th>
                            <th className='text-center' >Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            datas?.map((d, index) => <tr key={d?._id}>
                                <td>{index + 1}</td>
                                <td> {d?.email} </td>
                                {
                                    d?.role === "admin" ? <td>already an admin</td> : <td onClick={() => makeAdmin(d.email)} className=' text-green-700 hover:bg-slate-200 hover:cursor-pointer w-2/12 text-center  '>  Make admin    </td>
                                }
                                {/* <td> <button onClick={() => makeAdmin(d._id)} className=' btn btn-xs  ' > Make admin  </button>  </td> */}
                                {/* <td className='flex items-center'> <button onClick={() => makeAdmin(d._id)} className=' btn' > Make admin  </button>  </td> */}
                                <td onClick={() => removeAdmin(d?.email)} className={d?.role === "admin" ? 'text-red-500 hover:cursor-default hover:bg-red-600 hover:text-white w-0.5 text-center' : "disabled text-center text-gray-400"}   > remove </td>
                                {/* <td onClick={() => removeAdmin(d?.email)} className=  'text-red-500 hover:cursor-default hover:bg-red-600 hover:text-white w-0.5 text-center'  > remove </td> */}
                                {/* <td> <button className="btn btn-xs">admin</button> </td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUsers;