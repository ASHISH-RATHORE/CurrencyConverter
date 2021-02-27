import './App.css';
import React,{ Fragment,useEffect,useState} from 'react';
import { BrowserRouter as Router, Route,Switch, } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forgot from './Components/Forgot'
import Display from './Components/Display'
import GoogleAuth from './GoogleOauth/GoogleAuth';

function App() {

  
  

  return (

    
      


// 

<Fragment>
<section id='home'>
 

<Switch>
  <Route path="/" exact  component={Login} />
  <Route path = "/Signup" exact component = {Signup}/>
  <Route path = "/Login" exact component = {Login}/>
  <Route path="/Home" exact component={Display} />{/* 
  <Route path = "/Byepisodes" exact component = {Byepisodes}/>
  <Route path = "/Bycharacters" exact component = {Bycharacters}/> */}
  <Route path='/forgot' exact component={Forgot}/>
  

  </Switch>
    
</section>


    </Fragment>
  );
}

export default App;





// AIzaSyAwD1w9560N2Ye0oMtcn9XqQJTkVoQgLII