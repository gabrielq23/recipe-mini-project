import React from 'react'

const Footer = () => {

    const currYear = new Date().getFullYear();

    return (
        <div className='footer container'>
            <div className='footer-section'>
                <p className='title'>Contact Us</p>
                <p>somewebsite@fmail.com</p>
                <p>+65 xxxx xxxx</p>
                <p>&copy; {currYear} | All Rights Reserved</p>
            </div>
            <div className='footer-section'>
                <p className='title'>Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}

export default Footer
