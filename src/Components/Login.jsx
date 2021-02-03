import React, { Fragment,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'; 
import './Login.css';
import {Link} from 'react-router-dom'
function Login() {

      const [signin, setsignin] = useState({email:'',
      password:''
    } );
    const validation = (email,password) => {
         let user= localStorage.getItem('user');

          user=JSON.parse(user);
        if(email[0]===user.email[0] && password[0]===user.password[0]){
            return true
        }else return false;
    }
  console.log(signin)

    const handleChange = (e) => {
        setsignin({
            ...signin,
            [e.target.name] : [e.target.value]
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const res=validation(signin.email,signin.password);
        if(res){
            window.localStorage.setItem('Status',true);
           
            window.location.assign('/Home');
            
            return alert('logged IN !');
            
        }else{
            

            alert('incorrect details');
        }
    }
    return (
        <section>
            <h1>Welcome to Binge-Watch</h1>
            <form  autoComplete="off" >

                <div  id='login-form'>
                <TextField  name='email' label="Email" variant="outlined"  type='email' margin='dense' onChange={handleChange}/>
  <TextField id="login-password"  name='password' label="Password" variant="outlined" type='password' margin='dense'onChange={handleChange}/>
  <Button type="submit" variant="outlined" color='secondary' margin='dense' onClick={handleSubmit}>
      Login
    </Button>
    <h6>New User? <Link to='/Signup'  style={{textDecoration:'none'}}>Signup</Link></h6>
                </div>
  
  
</form>
        </section>
    )
}

export default Login;
