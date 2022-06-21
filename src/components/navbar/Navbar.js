import React, {useState} from 'react'
//import icon from react icon library
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FaHandHoldingMedical} from 'react-icons/fa'
import { Link } from 'react-router-dom'

//import style
import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span>Doctor<FaHandHoldingMedical/><br></br></span>Consultation</h1>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='/#home-section'>Home</a></li>
                    <li><a href='/#services-section'>Services</a></li>
                    <li><a href='/#articles-section'>Articles</a></li>
                    <li><Link to='/new'>New</Link></li>
                </ul>
                <h5> <span className='call'> Call Now </span> <br></br><span className='phone'>098-04440-44441</span></h5>
                <button className='btn'>Sign In</button>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar