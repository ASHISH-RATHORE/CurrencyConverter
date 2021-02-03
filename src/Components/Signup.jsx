import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'; 
import './Signup.css'
function Signup() {

    const [formData, setformData] = useState({
        name:'',
        email:'',
        password:''
    });
    const [conPass, setConPass] = useState('');
    

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name] : [e.target.value]
        });
    }
    const handleConPass = (e) => {
        setConPass(e.target.value);
    }

    const checkPass = () => {
        console.log(formData.password[0]);
        console.log(conPass);
        if(formData.password[0] === conPass){
            return true
        }
        return false;
    }

    const setData = () => {
        console.log(formData);
        localStorage.setItem("user", JSON.stringify(formData));
    }

    const handleSubmit = (e) => {

         const res = checkPass()
         if(!res){
            return alert('Passwords are not the Same !');
         }
        setData();
        alert('Signed Up successfully');
        window.location.assign('/Login')
    }






    return (
        <section >
            <form className='signup-form' autoComplete="off" >

            <TextField id="signup-name" 
            name="name" 
            type='text' 
            label="Name" 
            variant="outlined" 
            margin='dense' 
            onChange={handleChange}
            required />

            <TextField id="signup-email" 
            name="email" 
            type="email" 
            label="Email" 
            variant="outlined" 
            margin='dense' 
            onChange={handleChange}
            required />

            <TextField id="signup-password" 
            name='password' 
            type="password" 
            label="Password" 
            variant="outlined" 
            margin='dense' 
            onChange={handleChange}
            required />

            <TextField id="signup-Confirmpassword"  
            type='password' 
            name='Confirmpassword' 
            label="ConfirmPassword" 
            variant="outlined" 
            margin='dense' 
            onChange={handleConPass}
            required/>

            <Button variant="outlined" color='secondary' margin='dense' onClick={handleSubmit}>
             Signup
            </Button>
</form>
        </section>
    )
}

export default Signup;
