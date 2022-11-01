import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ tritment, currentDate }) => {
    const { name } = tritment;
    console.log(currentDate)

    return (
        <div>

            <input type="checkbox" id="my-boolking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-boolking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">{name}</h3>


                    <div className="card-body">
                        <form action="" className='grid gap-2'>

                            <div className="form-control">
                                <input type="text" value={name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" value={currentDate && format(currentDate, 'PP')} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Ful Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="phone Number" className="input input-bordered" />
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