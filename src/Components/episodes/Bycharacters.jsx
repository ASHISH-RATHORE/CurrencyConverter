import React, { Fragment,useState,useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import './Bycharacters.css'
import Selection from './../Selection';

function Bycharacters() {

const [Names, setNames] = useState([]);

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


useEffect(() => {
       
    const getNames= async()=>{
    
        try {
            const getData= await axios.get('https://breakingbadapi.com/api/characters');
             setNames(getData.data);
 
        }catch (error) {
            console.log(error)
        }
    }
    getNames();
}, [])

    return (
        <section>
          <div>
            <Selection />
          </div>

          <section className='char'>
          {
              Names.map((data,key)=>{
                  return(
                
          <Card  className='characters'>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Breaking-Bad-character"
              height="280"
              image={data.img}
              
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2" style={{fontSize:'15px',fontWeight:'bold'}}>
                Played by-  {data.portrayed}
              </Typography>
              <Typography  style={{fontSize:'10px'}}>
                  Name- {data.name}({data.nickname}) <br/>
                  Role- {data.occupation[0]}<br/>
                  Category- {data.category}
                
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>

              )})
          }
        </section>
        </section>
    )
}

export default Bycharacters;
