import React from 'react'

//import photos
import Ph1 from '../../photos/virus.png'
import Ph2 from '../../photos/throat.png'
import Ph3 from '../../photos/stomach.png'
import Ph4 from '../../photos/pediatrics.png'
import Ph5 from '../../photos/protection.png'
import Ph7 from '../../photos/medicine.png'
import Ph8 from '../../photos/dentistry.png'
import Ph9 from '../../photos/neurology.png'
import Ph10 from '../../photos/urology.png'
import Ph11 from '../../photos/dermatology.png'

// import style
import './Services.css'

const Services = () => {

    return (
        <div className='best' id='services-section'>
            <h1>Health Services For You</h1>
            <div>
                <p>We are always here to listening and understanding</p>
            </div>
            <div className='container'>
                <div className='service-block'>
                <img src={Ph1} alt='' />
                <p>Infectous</p>
                </div>

                <div className='service-block'>
                <img src={Ph2} alt='' />
                <p>Otolaryngology</p>
                </div>

                <div className='service-block'>
                <img src={Ph3} alt='' />
                <p>Gastroenterlogy</p>
                </div>

                <div className='service-block'>
                <img src={Ph4} alt='' />
                <p>Pediatrics</p>
                </div>

                <div className='service-block'>
                <img src={Ph5} alt='' />
                <p>HIV/AIDS</p>
                </div>

            </div>
            <div className='container'>
                <div className='service-block'>
                <img src={Ph7} alt='' />
                <p>General Medicine</p>
                </div>

                <div className='service-block'>
                <img src={Ph8} alt='' />
                <p>Dentisty</p>
                </div>

                <div className='service-block'>
                <img src={Ph9} alt='' />
                <p>Neurology</p>
                </div>

                <div className='service-block'>
                <img src={Ph10} alt='' />
                <p>Urology</p>
                </div>

                <div className='service-block'>
                <img src={Ph11} alt='' />
                <p>Dermatology</p>
                </div>

            </div>
            <button className='btn'>View All</button>
        </div> 

    )
}

export default Services