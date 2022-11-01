import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleAppointment from './SingleAppointment';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ currentDate }) => {
    const [services, setService] = useState([]);
    const [tritment, setTritment] = useState(null);
    // console.log(tritment)
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // console.log(services);
    return (
        <div className='py-5'>
            {/* <p>{format(currentDate, 'PP')}</p> */}

            {
                currentDate ?
                    <p className='text-green-500 text-lg font-bold' >Available Appointments On = <span className='text-blue-800'> {format(currentDate, 'PP')}</span> </p>
                    :
                    <p className='text-red-500 text-lg font-bold'>Please select a date first</p>
            }

            <div className="grid grid-cols-3 gap-5 px-10 pt-5">
                {
                    services.map(service => <SingleAppointment
                        key={service._id}
                        service={service}
                        currentDate={currentDate}
                        setTritment={setTritment}
                    ></SingleAppointment>)
                }
            </div>
            {
                tritment && <BookingModal 
                tritment={tritment} 
                currentDate={currentDate}
                ></BookingModal>
            }


        </div>
    );
};

export default AvailableAppointments;