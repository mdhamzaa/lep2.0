import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Analytics() {
  return (
    <>
    <h1 style={{ fontWeight: 'bold' }} >Analytics</h1>
    <br/>
   <div style={{display:'flex',gap:'1vw',flexWrap:'wrap'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="70"
        image="https://st2.depositphotos.com/1007566/7333/v/450/depositphotos_73338179-stock-illustration-construction-design.jpg"
        style={{backgroundcolor:'red'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          No of Employees
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          1200 users are currently giving services to our customers.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
        <Button variant="contained" size="small">Done</Button>
      </CardActions> */}
    </Card>
   <br />

   <Card sx={{ maxWidth: 345 }}>
   <CardMedia
     component="img"
     alt="green iguana"
     height="140"
     image="https://as2.ftcdn.net/v2/jpg/02/63/38/55/1000_F_263385574_H7SxVE8PwEY6p3Ur32MI4CsdgwXhEoaM.jpg"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       No of employers
     </Typography>
     <Typography variant="body2" color="text.secondary">
       5600 users are currently take services from us.
     </Typography>
   </CardContent>
   {/* <CardActions>
     <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
     <Button  variant="contained" size="small">Done</Button>
   </CardActions> */}
 </Card>
   <br/>

   <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://st2.depositphotos.com/5007459/8559/v/450/depositphotos_85599978-stock-illustration-road-works-sign.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Number of Works done
        </Typography>
        <Typography variant="body2" color="text.secondary">
          9856 works are done by our employees.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
        <Button variant="contained" size="small">Done</Button>
      </CardActions> */}
    </Card>

    </div>

    
</>

  );
}