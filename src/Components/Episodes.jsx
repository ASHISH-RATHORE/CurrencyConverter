import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Episode.css';
import {Link}  from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 150
  }
});

export default function Episodes() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             By Episodes   
          </Typography>
           </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
        <Link to='Byepisodes' style={{textDecoration:'none'}}>View</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
