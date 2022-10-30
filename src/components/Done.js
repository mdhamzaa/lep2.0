import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MdFileDownloadDone} from 'react-icons/md';
export default function Done() {
  return (
    <>
   <div style={{display:'flex',gap:'1vw',flexWrap:'wrap'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
         image="https://i.ibb.co/wdnvkjr/done-5.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carpenter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Needed a Carpenter to make a Cot
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
       Address
     </Typography>
     <Typography variant="body2" color="text.secondary">
       Street: 4-1-590, Troop Bazar
     </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
        <Button variant="contained" size="small">Done</Button>
      </CardActions>
    </Card>
   <br />

   <Card sx={{ maxWidth: 345 }}>
   <CardMedia
     component="img"
     alt="green iguana"
     height="140"
     image="https://i.ibb.co/ZX0HyBd/done-2.jpg"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       Carpenter
     </Typography>
     <Typography variant="body2" color="text.secondary">
     Needed a Carpenter for House interiors
     </Typography>
     <Typography gutterBottom variant="h6" component="div">
       Address
     </Typography>
     <Typography variant="body2" color="text.secondary">
       Street: 4-1-590, Troop Bazar
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
     <Button  variant="contained" size="small">Done</Button>
   </CardActions>
 </Card>
   <br/>

   <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ibb.co/cTWrk6v/done-3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carpenter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Needed a Carpenter for art work
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
       Address
     </Typography>
     <Typography variant="body2" color="text.secondary">
       Street: 4-1-590, Troop Bazar
     </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
        <Button variant="contained" size="small">Done</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ibb.co/Mn52bx6/done-6.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carpenter
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Needed a Carpenter for Designing door
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
       Address
     </Typography>
     <Typography variant="body2" color="text.secondary">
       Street: 4-1-590, Troop Bazar
     </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
        <Button variant="contained" size="small">Done</Button>
      </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ibb.co/Xy2CjR9/done-4.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carpenter
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Needed a Carpenter for household work
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
       Address
     </Typography>
     <Typography variant="body2" color="text.secondary">
       Street: 4-1-590, Troop Bazar
     </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
        <Button variant="contained" size="small">Done</Button>
      </CardActions>
    </Card>
    </div>
</>

  );
}