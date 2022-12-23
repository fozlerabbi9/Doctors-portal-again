import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [myAppointments, setMyAppointment] = useState([]);
    const user = useAuthState(auth);
    const email = user[0].email;
    // console.log(user);

    useEffect(() => {
        // fetch(`http://localhost:5000/booking?email=${email}`, {
        //     method: "GET",
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        if (email) {
            fetch(`http://localhost:5000/booking?email=${email}`)  // এই email টি server site এ query হিসেবে যাবে,,,
                .then(res => res.json())
                .then(data => {
                    setMyAppointment(data)
                })
        }
    }, [email]);

    const deleteFun = id => {
        console.log(id)
        const procied = window.confirm("Are You Sure To Delete This?");
        // const procied = toast.confirm("r u sure") ======== kaj horse na
        if (procied) {
            const url = `http://localhost:5000/booking/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const newData = myAppointments.filter(data => data._id !== id);
                    setMyAppointment(newData);
                })
        }
    }

    return (
        <div className='w-full'>
            All Appointments is =  {myAppointments.length}
            <ul>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Patient Name</th>
                                <th>Home</th>
                                <th>Service Name</th>
                                <th>Time</th>
                                <th>date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myAppointments?.map((myAppointment, index) =>
                                    <tr key={index} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{myAppointment.patientName}</td>
                                        <td>{myAppointment.liveingPlace}</td>
                                        <td>{myAppointment.serviceName}</td>
                                        <td>{myAppointment.slots}</td>
                                        <td>{myAppointment.date}</td>
                                        <td className='text-green-700 cursor-alias'>edit</td>
                                        <td className=' text-red-700 cursor-pointer' onClick={() => deleteFun(myAppointment._id)}>delete</td>
                                    </tr>
                                )
                                // ).reverse()
                            }
                        </tbody>
                    </table>
                </div>

                {/* // <li key={index}> PatientName : {myAppointment.patientName}, Email : {myAppointment.email}, date : {myAppointment.date} </li> */}

            </ul>
        </div>
    );
};

export default MyAppointment;