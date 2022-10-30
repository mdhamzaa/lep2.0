import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MdLocalFireDepartment} from 'react-icons/md'
export default function Urgent() {
  return (
    <>
   <div style={{display:'flex',gap:'1vw',flexWrap:'wrap'}}>

     
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ibb.co/KmGCKfz/pending1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carpenter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Needed a Carpenter to make a Entrance Door to IIIT sricity
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
       Address
     </Typography>
     <Typography variant="body2" color="text.secondary">
     630, Gnan Marg Sri City, Sathyavedu, Andhra Pradesh 517646
     </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{<MdLocalFireDepartment size={25} style={{color:'rgb(50,205,50'}}/> }</Button>
        <Button variant="contained" style={{backgroundColor:'rgb(50,205,50'}} size="small">Pending</Button>
      </CardActions>
    </Card>
    </div>
</>

  );
}