import React,{ useState} from 'react'
//here we import all the components
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Articles from './components/articles/Articles'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import New from './components/new/New'
import LogInForm from './components/LogIn/LogInForm'

function App() {
  const adminUser = {
    useremail :"Test@hotmail.com",
    password:"test123"
  };

  const [user, setUser] = useState({name :"" , useremail:"" });
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);
  }

  const Logout = () =>{
    console.log("LogOut ");
  }
  return (
    // <Router>
    // <>
    // <Switch>
    //   <Route exact path="/">
    //  <Navbar/>
    //  <Home/> 
    //  <Services/>
    //  <Articles/>
    //  <Footer/>
    //  </Route>
    
    //   <Route exact path="/new">
    //   <Navbar/>
    //   <New/>
    //  </Route>
    //  </Switch>
    // </>
    // </Router>
    <div> 
      {(user.useremail != "") ? (<div>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>LogOut</button>
      </div>) :(<LogInForm/>)}
    </div>
  );
}

export default App;
