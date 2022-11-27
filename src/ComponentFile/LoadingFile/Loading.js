import React from 'react';

const Loading = () => {
    return (
        <div className=''>
            {/* <div className="  bg-slate-800 flex items-center justify-center ">
                <button className="btn loading ">loading</button>
            </div> */}
            <div class=" h-screen flex items-center justify-center ">
                <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;