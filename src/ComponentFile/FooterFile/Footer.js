import React from 'react';

const Footer = () => {
    const date = new Date();
    const currentDate = date.getDate();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    return (
        <div className='bg-primary'>
            <footer className="footer w-4/5 mx-auto justify-between p-20 pb-5 text-neutral-content">
                {/* <div className=""> */}
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                {/* </div> */}
            </footer>

            <p className='text-white pb-5'> {currentDate}/{currentMonth + 1}/{currentYear} </p>


        </div>
    );
};

export default Footer;