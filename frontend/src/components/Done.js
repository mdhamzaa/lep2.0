import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { SpinnerCircular } from 'spinners-react';
import { getCompletedCustomerOrders } from '../service/api';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

function Capitalize(word){
    return word[0].toUpperCase()+word.slice(1).toLowerCase();
}

export default function Done() {
  const user=useSelector(state=> state.user.user);
  const [completedOrders, setcompletedOrders] = useState([]);
  const [loading,setLoading]=useState(true);

  async function completedOrdesrsConfig(){
    const res=await getCompletedCustomerOrders(user.username);
    console.log(res.data);
    setcompletedOrders(res.data);
    setLoading(false);
    console.log(completedOrders);
  }

  useEffect(() => {
   completedOrdesrsConfig();
  }, [])

  
  return loading?(<SpinnerCircular size="10vmax" speed="110"/>):(
    <>
   <div style={{display:'flex',gap:'1vw',flexWrap:'wrap'}}>
      {completedOrders.map((order)=>{
        return (
          <Card sx={{ maxWidth: "20vw" , height:"fit-content", minHeight:"15vh !important"}} key={order._id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://i.ibb.co/ZX0HyBd/done-2.jpg"
            />
            <CardContent>
              <div className='cardDetailBox'>
                <h2 className='cardDetailHeading'>Employee Name:</h2><span>{order.employee}</span>
              </div>
              <div className='cardDetailBox'>
                <h2 className='cardDetailHeading'>Date:</h2><span>{new Date(order.date).toDateString()}</span>
              </div> 
              <div className='cardDetailBox'>
                <h2 className='cardDetailHeading'>Time-Slot:</h2><span>{order.timeslot}</span>
              </div> 
              <div className='cardDetailBox'>
                <h2 className='cardDetailHeading'>Status:</h2><span>{Capitalize(order.status)}</span>
              </div>   
            </CardContent>
            {/* <CardActions>
              <Button size="small">{<MdFileDownloadDone size={23}/>}</Button>
              <Button  variant="contained" size="small">Done</Button>
            </CardActions> */}
          </Card>
        )
      })}
    </div>
</>

  );
}