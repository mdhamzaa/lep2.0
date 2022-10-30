import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MdDoNotTouch} from 'react-icons/md'
export default function Missed() {
  return (
    <>
   <div style={{display:'flex',gap:'1vw',flexWrap:'wrap'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ibb.co/GFm8kTk/misseed-1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carpenter
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Needed a Carpentar to add wooden-cuboards
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" >{<MdDoNotTouch size={23} style={{color:'red'}} />}</Button>
     <Button size="small" variant="contained" style={{backgroundColor:'red'}}>Cancelled</Button>
      </CardActions>
    </Card>
   <br />

   <Card sx={{ maxWidth: 345 }}>
   <CardMedia
     component="img"
     alt="green iguana"
     height="140"
     image="https://i.ibb.co/NL8PFzp/missed-2.jpg"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       Carpenter
     </Typography>
     <Typography variant="body2" color="text.secondary">
       Need a Carpenter for wood carving
      
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small" >{<MdDoNotTouch size={23} style={{color:'red'}} />}</Button>
     <Button size="small" variant="contained" style={{backgroundColor:'red'}}>Cancelled</Button>
   </CardActions>
 </Card>
   <br/>

    </div>
</>

  );
}