import React from "react";
import './Contact.css'

const Office = () => {
    return (
        <>
            <div className="Contact_office">
                <div className="off_loca">
                    <p className="heading">location</p>
                    <h1>Our Offices</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="address">
                    <div>
                        <h1>New York</h1>
                        <p>40 Gates Court Endicott, NY 13760</p>
                        <p>contact@treact.com</p>
                        <p>+1 (203) 991-6988</p>
                    </div>
                    <div>
                        <h1>Illinois</h1>
                        <p>602 Annadale Drive Dekalb, IL 60115</p>
                        <p>contact@treact.com</p>
                        <p>+1 (203) 991-6988</p>
                    </div>
                    <div>
                        <h1>California</h1>
                        <p>96 NE. Delaware Lane Sacramento, CA 95820</p>
                        <p>contact@treact.com</p>
                        <p>+1 (203) 991-6988</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Office