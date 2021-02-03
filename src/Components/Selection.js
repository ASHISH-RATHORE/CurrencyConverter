import React,{Fragment, useEffect,useState} from 'react';
import Episodes from './Episodes';
import Characters from './Characters';
import './../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import './selection.css';


const Selection = () => {

    const [state, setstate] = useState('');
    const [status, setstatus] = useState(false);

    const verifyUser = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        let userStatus = JSON.parse(localStorage.getItem("Status"))
        setstate(user.name[0])
        setstatus(userStatus)

        if(!userStatus){
            alert('Please Login')
            return window.location.assign('/login')
        }
    }

   useEffect(() => {
       verifyUser();
   }, [status])

    

   

    

    

   const loggingout=()=>{
       JSON.stringify(localStorage.setItem("Status",false));
       setstatus(false)
//     if(JSON.parse(localStorage.getItem("Status"))){
//       let active=JSON.parse(localStorage.getItem("user"))
//       setstate(active.name[0]);

//   }else{
//       setstate('USER')
//   } 
     
      }


    
     
    return(
       
        

         <section><div id='home'>

            
         <AppBar position="static" >
         <Toolbar style={{justifyContent:'space-between'}}>
           
         <Typography variant="h6" >
             <Link to='Home' style={{textDecoration:'none',color:'black'}}> BINGE-WATCH </Link>
          </Typography>
           
           <Typography color="inherit">
          { 
           status ? `Welcome ${state}`: `Please Login`
          }
           </Typography>
       
               
           {( status ? 
                     <Button color="primary" style={{textDecoration:'none',color:'black'}} onClick={loggingout}>Logout</Button>
                 :<Button color="primary" style={{textDecoration:'none',color:'black'}}>Login</Button>
                
                     
                       )
       }
     
             </Toolbar> 
       </AppBar>     
 
 
       
              </div>


              <section id='card'>
                  <Episodes/>
                  <Characters/>
              </section>
  </section>
            
            
  
        
    )
}

export default Selection;




