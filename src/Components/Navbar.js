import React, { useState } from "react";
import './style1.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleNavbar = () => {
        setOpen(!isOpen);
    };

    return (
        <nav className={`Navbar ${isOpen ? 'open' : ''}`}>
            <div className="Logo">LOGO</div>
            <div >
                <ul className={`navmenu ${isOpen ? 'open' : ''}`}>
                    <div className="menu-icon icon-li" onClick={toggleNavbar}>
                        &#9776;
                    </div>
                    <li><Link to='/' className="li1">Home</Link></li>
                    <li><Link to='/menu' className="li1">Order</Link></li>
                    <li><Link to='/about' className="li1">About Us</Link></li>
                    <li><Link to='/contact' className="li1">Contact Us</Link></li>
                    <span className="btns">
                        <button className="btn">LogIn</button>
                        <button className="btn">SignUp</button>
                    </span>
                </ul>

            </div>
            <div className="menu-icon" onClick={toggleNavbar}>
                &#9776;
            </div>
        </nav>
    )
}

export default Navbar;
