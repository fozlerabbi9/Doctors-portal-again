import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ tritment, setTritment, currentDate }) => {
    const { name, slots } = tritment;
    const date = currentDate && format(currentDate, 'PP');

    const bookingModal = (e) => {
        e.preventDefault();
        const serviceName = e.target.name.value;
        const date = e.target.date.value;
        const slot = e.target.slot.value;
        const email = e.target.email.value;
        const fullName = e.target.fullName.value;
        const number = e.target.number.value;

        const fullData = {
            serviceName: serviceName,
            date: date,
            slot: slot,
            email: email,
            fullName: fullName,
            number: number
        }
        console.log(fullData);
        setTritment(null)
    }

    return (
        <div>

            <input type="checkbox" id="my-boolking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-boolking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-blue-800">Booking For : <span className='text-accent'>{name}</span></h3>


                    <div className="card-body">
                        <form onSubmit={bookingModal} action="" className='grid gap-2'>

                            <div className="form-control">
                                <input name='name' type="text" value={name} readOnly className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input name='date' type="text" value={date} disabled className="input input-bordered" />
                                {/* <input type="text" value={currentDate && format(currentDate, 'PP')} className="input input-bordered" /> */}
                            </div>
                            <div className="form-control">
                                <select name='slot' className="input input-bordered pl-2">
                                    {
                                        slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                                    }
                                </select>
                                {/* <input type="text" value={slots} className="input input-bordered" /> */}
                            </div>
                            <div className="form-control">
                                <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input name='fullName' required type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input name='number' required type="text" placeholder="phone Number" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input type="submit" value="Submit" className="btn hover:text-accent" />
                            </div>

                        </form>
                    </div>
                </div>

                {/* <div className="modal-action">
                        <label htmlFor="my-boolking-modal" className="btn">Yay!</label>
                    </div> */}

            </div>
        </div>
        // </div>
    );
};

export default BookingModal;