import React from "react";


const Form = () => {
    return (
        <>
            <form className="contact-form">
                <input type="email" placeholder="Enter Your Email" />
                <input type="text" placeholder="Enter Your Name" />
                <input type="text" placeholder="Enter Your Subject" />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Your Message"
                    required
                ></textarea>
                <input type="submit" value="Submit" />
            </form>

        </>
    )
}

export default Form