import React from 'react'

//import style 
import './Home.css'

const Home = () => {
    return(
        <div className='hero' id='home-section'>
        <div className='content'>
            <h1>Consult a doctor anytime, anywhere by video call</h1>
            <p className='hero-text'> Talk with a doctor using our highly secured HIPAA complaint end-to-end encrypted video call. </p>
            <div className='hero-btn'>
            <button className='ask-btn'>Ask A Doctor Online</button>
            <button className='chat-btn'> Unlimited Chat</button>
            </div>
        </div>
      </div>

    )
}


export default Home