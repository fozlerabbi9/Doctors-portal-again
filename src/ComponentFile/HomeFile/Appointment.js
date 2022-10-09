import React from 'react';
import Button from '../ButtonFile/Button';
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";

const Appointment = () => {
    console.log(appointment)
    return (
        <div>
            <div style={{
                // background: `url(${appointment})`
            }} className="hero h-screen bg-origin-border bg-cover bg-center bg-primary text-white" >
                {/* <img src={appointment} alt="" /> */}
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="rounded-lg w-2/4" alt='' />
                    <div className='text-left'>
                        <h2 className="text-2xl font-bold text-accent">Appointment</h2>
                        <h1 className="text-5xl font-bold text-accent">Make an appointment today</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get start</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;