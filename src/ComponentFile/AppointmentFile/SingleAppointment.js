import React from 'react';

const SingleAppointment = ({ service, currentDate, setTritment }) => {
    const { name, slots, _id } = service;

    // console.log(_id)
    return (
        <div>
            {/* <select name="" id="">
                <option value={slots}>{slots}</option>
            </select> */}
            <div style={{ backgroundColor: "rgba(0,0,0,0.8)" }} className="card text-neutral-content">
                <div className="card-body items-center text-center">
                    {/* <div className={`${currentDate ? "card-body items-center text-center" : "card-body items-center text-center cursor-no-drop"}`}> */}
                    <h2 className="card-title text-accent">{name}</h2>
                    {/* <p>{slots.length} spaces available</p> */}
                    <p>
                        {
                            slots.length ? <span>{slots[0]}</span>
                                :
                                <span className='text-red-500'>Try another date</span>
                        }
                    </p>
                    <p className='text-sm'> {slots.length} {`${slots.length > 1 ? "spaces" : "space"}`} available</p>
                    <div className="card-actions justify-center">

                        {/* <label htmlFor="my-modal-6" className="btn">open modal</label> <br /> */}
                        <label htmlFor="my-boolking-modal"
                            onClick={() => setTritment(service)}
                            disabled={slots.length === 0 || `${currentDate ? "" : "cursor-no-drop"}`}
                            className={`${slots.length === 0 ? "text-red-500 text-sm font-bold btn cursor-no-drop" : "btn hover:text-accent"} ${currentDate ? "" : "cursor-no-drop"}`}
                        >Bock Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAppointment;