import React from 'react';

const Cardinfo = ({ cardTitle, description, icone, bgColor, hover }) => {
    return (

        // <div className="card">

        //     <div className={`card-style card-side shadow-xl border-2 text-white ${bgColor} transition duration-700 `}>
        //         <img className=' p-8 w-2/6' src={icone} alt="" />
        //         <div className="card-body text-left">
        //             <h2 className="card-title">{cardTitle}</h2>
        //             <p>{description}</p>
        //         </div>
        //     </div>

        // </div>

        // <div class="card">
        //     <span className='text-white z-10'><div>
        //         <img className='' src={icone} alt="" />
        //         <div className="card-body text-left">
        //             <h2 className="card-title">{cardTitle}</h2>
        //             <p>{description}</p>
        //         </div>
        //     </div>
        //     </span>

        // </div>

        // <div class="card">
        //     <span className='text-white z-10'><div className={`card-style card-side shadow-xl border-2 text-white ${bgColor} transition duration-700 `}>
        //         <img className='' src={icone} alt="" />
        //         <div className="card-body text-left">
        //             <h2 className="card-title">{cardTitle}</h2>
        //             <p>{description}</p>
        //         </div>
        //     </div></span>

        // </div>


        <div className={`card-style card card-side shadow-xl border-2 border-accent text-white ${bgColor} ${hover}`}>
            <img className=' p-8 w-2/6' src={icone} alt="" />
            {/* <img  className='icone-style p-8 w-2/6' src={icone} alt="" /> */}
            <div className="card-body text-left">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Cardinfo;