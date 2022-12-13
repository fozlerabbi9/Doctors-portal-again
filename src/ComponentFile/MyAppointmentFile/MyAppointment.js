import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [myAppointments, setMyAppointment] = useState([]);
    const user = useAuthState(auth);
    const email = user[0].email;
    // console.log(myAppointments);

    useEffect(() => {
        // fetch(`http://localhost:5000/booking?email=${email}`, {
        //     method: "GET",
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        fetch("http://localhost:5000/booking")
            .then(res => res.json())
            .then(data => {
                setMyAppointment(data)
            })
    }, [])

    return (
        <div>
            All Appointments is =  {myAppointments.length}
            <ul>
                {
                    myAppointments.map((myAppointment, index) =>
                        <li key={index}> PatientName : {myAppointment.patientName}, Email : {myAppointment.email}, date : {myAppointment.date} </li>
                    ).reverse()
                }
            </ul>
        </div>
    );
};

export default MyAppointment;