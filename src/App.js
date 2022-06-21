import React from 'react'
//here we import all the components
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Articles from './components/articles/Articles'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import New from './components/new/New'

function App() {
  return (
    <Router>
    <>
    <Switch>
      <Route exact path="/">
     <Navbar/>
     <Home/> 
     <Services/>
     <Articles/>
     <Footer/>
     </Route>
    
      <Route exact path="/new">
      <Navbar/>
      <New/>
     </Route>
     </Switch>
    </>
    </Router>
  );
}

export default App;
