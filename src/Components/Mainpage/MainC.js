import React from "react";
import img from './images/AM.avif'
import './Main.css'

const MainC = () => {
    return (
        <>
            <div className="MainC Main_1">
                <img src={img} alt='food' className="MainC_img main_img" />
                <div className="main_div mainC_div">
                    <p className='heading'>Established Since 2014</p>
                    <h1 className="mainh">We've been serving for <h2 className="span">over 5 years.</h2></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="main_btn">Latest Offers</button>
                </div>
            </div>
        </>
    )
}

export default MainC