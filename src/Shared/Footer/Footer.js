import React from 'react';

const Footer = () => {
    return (
        <footer className="  bg-light  text-neutral-content">
            <div className='w-1/1 text-gray-900 flex justify-evenly footer p-10 mx-auto'>
                <div className='mx-20'>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Emergency Checkup</a>
                    <a href='/' className="link link-hover">Monthly Checkup</a>
                    <a href='/' className="link link-hover">Weekly Checkup</a>
                    <a href='/' className="link link-hover">Deep Checkup</a>
                </div>
                <div className='mx-20'>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a href='/' className="link link-hover">Fluoride Treatment</a>
                    <a href='/' className="link link-hover">Cavity Filling</a>
                    <a href='/' className="link link-hover">Teath Whitening</a>
                </div>
                <div className='mx-20'>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a href='/' className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <div className=" flex justify-center pt-0 pb-10  text-gray-900">
                <div className="">
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;