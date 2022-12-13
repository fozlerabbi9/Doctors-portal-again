import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleAppointment from './SingleAppointment';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../LoadingFile/Loading';

const AvailableAppointments = ({ currentDate }) => {
    // const [services, setService] = useState([]);
    const [tritment, setTritment] = useState(null);
    // console.log(tritment._id)
    // if (tritment._id) {
    //     // console.log(tritment._id)
    // }
    const formatetDate = currentDate && format(currentDate, 'PP')
    // console.log(formatetDate)
    const { data, isLoading , refetch} = useQuery(['availabel', formatetDate], () =>
        fetch(`http://localhost:5000/available?date=${formatetDate}`)
            .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    // fetch("http://localhost:5000/services")
    // fetch("fakeData.json")
    //     fetch(`http://localhost:5000/available?date=${formatetDate}`)
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [formatetDate])
    // console.log(services);

    return (
        <div className='py-5'>
            {/* <p>{format(currentDate, 'PP')}</p> */}

            {
                currentDate ?
                    <p className='text-green-500 text-lg font-bold' >Available Appointments On = <span className='text-blue-800'> {format(currentDate, 'PP')}</span> </p>
                    :
                    <p className='text-red-500 text-lg font-bold'>Please select a date first...</p>
            }

            <div className="grid grid-cols-3 gap-5 px-10 pt-5">
                {
                    data?.map(service => <SingleAppointment
                        key={service._id}
                        service={service}
                        currentDate={currentDate}
                        setTritment={setTritment}
                    ></SingleAppointment>)
                }
            </div>
            {
                tritment && <BookingModal
                    key={tritment._id}
                    tritment={tritment}
                    currentDate={currentDate}
                    setTritment={setTritment}
                    refetch={refetch}
                ></BookingModal>
            }


        </div>
    );
};

export default AvailableAppointments;