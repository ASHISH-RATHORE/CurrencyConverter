import React,{ Fragment,useEffect,useState }  from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Byepisodes.css';
import CardMedia from '@material-ui/core/CardMedia';
import Selection from './../Selection';


function Byepisodes() {

  

    const [totalepisodes, settotalepisodes] = useState([]);

    const verifyUser = () => {
      // let user = JSON.parse(localStorage.getItem("user"));
      let userStatus = JSON.parse(localStorage.getItem("Status"))
      // setstate(user.name[0])
      // setstatus(userStatus)
    
      if(!userStatus){
          alert('Please Login')
          return window.location.assign('/login')
      }
    }
    
    verifyUser();

  //  console.log(totalepisodes);
useEffect(() => {
  
      //      let x=localStorage.getItem('Status')
      //      x=JSON.parse(x);
      //   if(!x){
      //      alert('Please Login');
      //      window.location.assign('/Login');
      //      console.log(localStorage.getItem('Status'))   
      //  }
   
  const getEpisodes= async()=>{
    

    try{

      const data= await axios.get('https://breakingbadapi.com/api/episodes');
      // console.log(data.data);
      settotalepisodes(data.data);


    }catch(err){
      console.log(err);
    }

  }

  getEpisodes();
  
}, [])

// console.log(totalepisodes)
    return (
      <section>
        <div>
          <Selection />
        </div>

        <section className='episodes'>
     
      {totalepisodes.map((data,key)=>{
           
           
               return(

                                   <Card className='cards'>
                   
                 <CardContent>
                 
                 <Typography color="textPrimary"  >
                     {data.series}
   
                   </Typography>
                   <Typography variant="h5" component="h2" color="textPrimary">
                     Season {data.season}
                   </Typography>
                   <Typography  color='inherit' color="textPrimary">
                     Episode {data.episode}
                   </Typography>
                   <Typography variant="body2" component="p" color="textPrimary">
                     {data.title}
                     <br />
                    
                   </Typography>
                   
                   <footer className='footer'>
                   <Typography align='center' className='type'>
                   Released Date-{data.air_date} 
                   </Typography>
                   </footer>
                 </CardContent>
                 
                 </Card>
 
                 )
             
           
           
      })}
        
       </section>
      </section>
    )
}

export default Byepisodes;




// <Card className='cards'>
// <CardContent>
//   <Typography  color="textSecondary" >
//     Word of the Day
//   </Typography>
//   <Typography variant="h5" component="h2">
//     benevolllent
//   </Typography>
//   <Typography  color="textSecondary">
//     adjective
//   </Typography>
//   <Typography variant="body2" component="p">
//     well meaning and kindly.
//     <br />
//     {'"a benevolent smile"'}
//   </Typography>
// </CardContent>
// <CardActions>
//   <Button size="small">Learn More</Button>
// </CardActions>
// </Card>