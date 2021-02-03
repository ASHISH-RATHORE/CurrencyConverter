import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import React,{ Fragment,useEffect,useState} from 'react';
import { BrowserRouter as Router, Route,Switch, } from "react-router-dom";
import Byepisodes from './Components/episodes/Byepisodes';
import Bycharacters from './Components/episodes/Bycharacters';
import Login from './Components/Login';
import Signup from './Components/Signup';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Selection from './Components/Selection';

function App() {

  
  

  return (

    
      


// 

<Fragment>
<section id='home'>

<Switch>
  <Route path="/" exact  component={Login} />
  <Route path = "/Signup" exact component = {Signup}/>
  <Route path = "/Login" exact component = {Login}/>
  <Route path="/Home" exact component={Selection} />
  <Route path = "/Byepisodes" exact component = {Byepisodes}/>
  <Route path = "/Bycharacters" exact component = {Bycharacters}/>
  

  </Switch>
    
</section>


    </Fragment>
  );
}

export default App;





