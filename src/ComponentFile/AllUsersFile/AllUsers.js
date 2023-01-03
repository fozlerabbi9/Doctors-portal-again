import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../LoadingFile/Loading';

const AllUsers = () => {
    // const [users, setAllUsers] = useState([]);
    // const user = useAuthState(auth);
    // const email = user[0].email;

    const { data: datas, isLoading, refetch } = useQuery("users", () =>
        fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => res.json())
    )
    console.log(datas)


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
                return res.json()   // return না করলে (res.json()) কাজ হবে না  ,,, single line হলে return করা লাগত না
            })
            .then(data => {
                    refetch();
                    toast.success("successfully make an admin")
            })

    }
    // console.log(data)

    return (
        <div className='w-full'>
            alll users ===----- {datas?.length}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Email</th>
                            <th className='text-center' >Admin</th>
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
                                <td className='text-red-500 hover:cursor-default hover:bg-red-600 hover:text-white w-0.5 text-center' > delete </td>
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