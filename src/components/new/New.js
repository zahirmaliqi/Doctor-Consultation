import React from 'react'
import './New.css'
import News from './News';

function New(){

    const news =[
        {
        tittle: "New 1",
        content:"The contents of a book is the list of chapters or articles or parts that are in the book, with the number of the page they begin on: If you look at the contents, you'll see there's a chapter on Japanese folk music."
        },
        {
        tittle: "New 2",
        content:"The contents of a book is the list of chapters or articles or parts that are in the book, with the number of the page they begin on: If you look at the contents, you'll see there's a chapter on Japanese folk music."
        },
        {
        tittle: "New 3",
        content:"The contents of a book is the list of chapters or articles or parts that are in the book, with the number of the page they begin on: If you look at the contents, you'll see there's a chapter on Japanese folk music."
        }
    ] ; 

    const newList = news.map((list) => <News list={list}/>
       );

  
      

    return (
        <div className='background-img'>
           <div>{newList}</div>
           <div id='content'>
            <h1 >News</h1>
           <p>Your Healthier Today<br></br> & Better Tomorrow</p>
           </div>
        </div>
     
    );
}

export default New;