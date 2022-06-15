import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3><a href='#home-section'>Home</a></h3>
                    <p><a href='#services-section'>Services</a></p>
                    <p>Consultation</p>
                    <p><a href='#articles-section'>Articles</a></p>
                    <p>About Us</p>
                    
                </div>
                <div className='col'>
                    <h3>Infectous</h3>
                    <p>Neurology</p>
                    <p>Dentisty</p>
                    <p>Urology</p>
                    <p>HIV</p>
                </div>
                <div className='col'>
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h3>Contact us</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer