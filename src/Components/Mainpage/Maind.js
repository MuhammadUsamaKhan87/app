import React from "react";
import img from './images/p1.avif'
import './Main.css'

const Maind = () => {
    return (
        <>
            <div className="MainC Main_1">
                <div className="main_div mainC_div">
                    <p className='heading'>Established Since 2014</p>
                    <h1>Why you <h2 className="span">Choosing us ??</h2></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="Main_about">
                        <h1 className="h">94000+<br /><span>Order</span></h1>
                        <h1 className="h">11000+<br /><span>Customer</span></h1>
                        <h1 className="h">1500+<br /><span>Chef</span></h1>
                    </div>
                    <button className="main_btn">Learn More</button>
                </div>
                <img src={img} alt='food' className="MainC_img main_img" />
            </div>
        </>
    )
}

export default Maind