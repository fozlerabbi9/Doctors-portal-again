import React from 'react';
import treatment from '../../assets/images/treatment.png'
import Button from '../ButtonFile/Button';

const Exceptional = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-neutral text-white px-32">
                <div className="hero-content flex-col lg:flex-row">
                        <img className='w-2/6' src={treatment} alt="" />
                    <div className='text-left ml-16'>
                        <h1 className="text-5xl font-bold text-accent">Box Office News <span className='text-red-600'>!</span> </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        <Button>Get Start</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;