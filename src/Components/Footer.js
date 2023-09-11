import React from "react";
import './style1.css'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="Footer_main">
                    <div className="footer_ul">
                        <ul>
                            <li><strong>MAIN</strong></li>
                            <li>Blog</li>
                            <li>FAQs</li>
                            <li>Support</li>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li><strong>PRODUCT</strong></li>
                            <li>Login</li>
                            <li>Personal</li>
                            <li>Business</li>
                            <li>Team</li>
                        </ul>
                        <ul>
                            <li><strong>PRESS</strong></li>
                            <li>Logos</li>
                            <li>Events</li>
                            <li>Stories</li>
                            <li>Office</li>
                        </ul>
                        <ul>
                            <li><strong>LEGAL</strong></li>
                            <li>GDPR</li>
                            <li>Privacy Policy</li>
                            <li>Term of service</li>
                            <li>Diclaimer</li>
                        </ul>
                    </div>
                    <div className="footer_sub">
                        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <p>We deliver high quality blog posts written by professionals weekly. And we promise no spam.</p>
                        <input type="text" placeholder="Your Email Address" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <hr />
                <div className="footer_n">
                    <h1>LOGO Inc.</h1>
                    <p>© 2018 Treact Inc. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer