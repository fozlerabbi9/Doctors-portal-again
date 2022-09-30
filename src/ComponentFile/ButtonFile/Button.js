import React from 'react';
import "../ButtonFile/Button.css";

const Button = ({ children }) => {
    return (
        <div>
            {/* <button className='button-style'>{children}</button> */}
            <button href="#"><svg> <rect></rect></svg>{children}</button>
        </div>
    );
};

export default Button;