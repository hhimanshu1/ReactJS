import React from "react";
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Error from './Error';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import User from './User'
   
const App=()=>{
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/'component={()=><About name="About"/>} />
        <Route exact path='/contact' render={()=><Contact name="Contact"/>} />
        <Route exact path='/services'component={Services} />
        <Route path="/user/:fname/:lname" component={User}/>
        <Route component={Error} />
      </Switch>
       
    </>
  );
};

export default App;