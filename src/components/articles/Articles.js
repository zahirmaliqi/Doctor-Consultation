import React from 'react'

//Import icons react library
import {AiOutlineCalendar} from 'react-icons/ai'
import {FaRegCommentAlt} from 'react-icons/fa'
import {IoEyeSharp} from 'react-icons/io5'

//Import css file 
import './Articles.css'

//Import photos
import Cov1 from '../../photos/covid5.jpg'
import Cov2 from '../../photos/covid2.jpg'
import Cov3 from '../../photos/covid3.jpg'
import Cov4 from '../../photos/covid4.jpg'
import Cov5 from '../../photos/covid1.jpg'

import Neuro1 from '../../photos/neuro5.jpg'
import Neuro2 from '../../photos/neuro2.jpg'
import Neuro3 from '../../photos/neuro3.jpg'
import Neuro4 from '../../photos/neuro4.jpg'
import Neuro5 from '../../photos/neuro1.jpg'

const Articles = () => {

    return (
        <div className='article' id='articles-section'>
            <h1 className='article-text'>Our recent Articles</h1>
            <p className='article-text'>Articles is a part or segment of something joined to other parts, or, in <br></br>combination, forming a structured set</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Cov1} alt='' />
                <img src={Cov2} alt='' />
                <img src={Cov3} alt='' />
                <img src={Cov4} alt='' />
                <img src={Cov5} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h3> <AiOutlineCalendar/> 15 June</h3>
                        <h3> <FaRegCommentAlt/> 54</h3>
                        <h3> <IoEyeSharp/> 1.9k</h3>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <h2>Infectous</h2>
                    <p>COVID-19 vaccine is one of the highest priorities in this current pandemic situation. All the countries around the world are ... </p>
                    <button className='btn'>Read more</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Neuro1} alt='' />
                <img className='order-3' src={Neuro2} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={Neuro3} alt='' />


                <img className='order-4' src={Neuro4} alt='' />
                <img className='order-5' src={Neuro5} alt='' />

                <div className='span-2 right-img-details order-7'>
                <h2>Neurology</h2>
                    <p>Medical school taught us to learn and to became neurology residents. Scrolling throught the lengthy list of this year's presentations at the American Academy ...</p>
                    <button className='btn'>Read More</button>
                </div>


                <div className='span-3 img-details order-6'>
                <div className='top'>
                        <h3> <AiOutlineCalendar/> 15 June</h3>
                        <h3> <FaRegCommentAlt/> 54</h3>
                        <h3> <IoEyeSharp/> 1.9k</h3>
                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default Articles