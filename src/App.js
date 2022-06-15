import React from 'react'
//here we import all the components
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Articles from './components/articles/Articles'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Services/>
     <Articles/>
     <Footer/>
    </>
  );
}

export default App;
