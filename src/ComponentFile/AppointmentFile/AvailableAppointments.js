import React from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ currentDate }) => {
    return (
        <div>
            {/* <p>{format(currentDate, 'PP')}</p> */}

            {
                currentDate ?
                    <p className='text-green-500 text-lg font-bold' >Available Appointments On = <span className='text-blue-800'> {format(currentDate, 'PP')}</span> </p>
                    :
                    <p className='text-red-500 text-lg font-bold'>Please select a date first</p>
            }
        </div>
    );
};

export default AvailableAppointments;