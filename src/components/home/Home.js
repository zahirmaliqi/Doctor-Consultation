import React, { Component } from 'react'

//import style 
import './Home.css'

class Home extends Component{
    constructor() {
        super()
        this.state={
            talkmssg: "Talk with a doctor using our highly secured HIPAA complaint end-to-end encrypted video call.",
            
        }

    }
    changeText = () => {
        this.setState({
            talkmssg: "We will get back to you sooner ...",
           
        })
    }

    render(){
    return(
        <div className='hero' id='home-section'>
        <div className='content'>
            <h1>Consult a doctor anytime, anywhere by video call</h1>
            <p className='hero-text'> { this.state.talkmssg }</p>
            <div className='hero-btn'>
            <button className='ask-btn' onClick={this.changeText}>Ask A Doctor Online</button>
            <button className='chat-btn'> Unlimited Chat</button>
            </div>
        </div>
      </div>

       )
     }
}


export default Home