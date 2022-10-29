import React, { useState } from 'react';
import Footer from '../FooterFile/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    
    return (
        <div>

            <AppointmentBanner
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
            ></AppointmentBanner>

            <AvailableAppointments
                currentDate={currentDate}
            ></AvailableAppointments>

            <Footer></Footer>
        </div>
    );
};

export default Appointment;