import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './AppointmentBanner.css'

const AppointmentBanner = ({currentDate, setCurrentDate}) => {
    // const today = new Date();
    // const [currentDate, setCurrentDate] = useState(today);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" w-full hero-content flex-col lg:flex-row-reverse">
                    <div className="container w-3/6 lg:ml-5 rounded-lg shadow-2xl">

                        <div className="image-container ">

                            <img src="https://images.theconversation.com/files/289016/original/file-20190822-170951-avvckq.jpg?ixlib=rb-1.1.0&rect=0%2C441%2C6016%2C3008&q=45&auto=format&w=1356&h=668&fit=crop" className='h-96' />

                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...</p>
                            </div>

                        </div>

                    </div>

                    <div className=''>
                        <DayPicker
                            mode="single"
                            selected={currentDate}
                            onSelect={setCurrentDate}
                        ></DayPicker>
                        {/* {
                            currentDate ? <p className='text-green-500 text-lg font-bold' >Ssselected date is = <span className='text-blue-800'> {format(currentDate, 'PP')}</span> </p> : <p className='text-red-500 text-lg font-bold'>Please select a date</p>
                        } */}

                    </div>


                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;