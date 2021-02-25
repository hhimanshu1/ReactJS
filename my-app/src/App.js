import React from "react";
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Error from './Error';
import Contact from './Contact';
import Navbar from './Navbar';
   
const App=()=>{
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/'component={About} />
        <Route exact path='/contact'component={Contact} />
        <Route component={Error}/>
      </Switch>
       
    </>
  );
};

export default App;