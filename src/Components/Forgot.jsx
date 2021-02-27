import React,{Fragment,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'; 


function Forgot() {

     const [email, setemail] = useState({email:''});
     
     const [user, setUser] = useState({
         name: '',
         email: '',
         password: ''
     });

    const validation = (email) => {
        let existingUser= localStorage.getItem('user');

        existingUser=JSON.parse(existingUser);

       if(email[0]===existingUser.email[0]){
           return true;
       }else
         return true;
   }

   const handleChange = (e) => {
    setemail({
         
        [e.target.name] : [e.target.value]
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    const res=validation(email.email);
    if(res){

        console.log('Email validated!')
        // let existingUser ;                                       
        let existingUser=JSON.parse(window.localStorage.getItem("user"));
        // window.localStorage.setItem('Status',false);

        console.log('user is: ', existingUser);
       
        // window.location.assign('/Login');
        alert('Email Verified');
        let pwd= prompt('Enter password');
        console.log(pwd)
// test---18:14
        //  window.localStorage.removeItem("user");    
         console.log('test')
               setUser({
            name: existingUser.name,
            email: existingUser.email[0],
            password: pwd
        });
       
            window.localStorage.setItem("user",JSON.stringify(user))
        // JSON.stringify(window.localStorage.setItem("user",user));
           console.log(pwd,user.password);
    console.log('user state is : ', user)

    }else{
        

        alert('incorrect details or not signed up');
    }
}
    return (
       
       <Fragment>
          <form className='signup-form' >



<TextField id="forgot-email" 
name="email" 
type="email" 
label="Email" 
variant="outlined" 
margin='dense' 
onChange={handleChange}
required />




<Button variant="outlined" color='secondary' margin='dense' 
onClick={handleSubmit}>
 Submit
</Button>
</form>
       </Fragment>
    )     
}

export default Forgot;
