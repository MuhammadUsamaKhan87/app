import React from "react";
import img from './images/Main.avif'
import './Main.css'

const Mainh = () => {
    return (
        <>
            <div className="Main_1">
                <div className="main_div">
                    <h1 className="mainh">Delicious & Affordable</h1>
                    <span><h2>Meals Near You.</h2></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        <button className="main_btn">Order Now</button>
                    </div>
                </div>
                <img src={img} alt="amazing food" className="main_img" />
            </div>
        </>
    )
}

export default Mainh