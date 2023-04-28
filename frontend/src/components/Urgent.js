import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { SpinnerCircular } from 'spinners-react';


import { getPendingCustomerOrders } from '../service/api';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { putCompletedOrder,putCancelledOrder } from '../service/api';

function Capitalize(word){
  return word[0].toUpperCase()+word.slice(1).toLowerCase();
}


export default function Urgent() {
  const user = useSelector(state => state.user.user);


  const [customerOrders, setcustomerOrders] = useState([])
  const [loading,setLoading]=useState(true);

  async function customerOrdersConfig() {
    const res = await getPendingCustomerOrders(user.username);

    setcustomerOrders(res.data);
    setLoading(false);
  }
  useEffect(() => {
    customerOrdersConfig()
  }, [])
  useEffect(() => {
    customerOrdersConfig()
  }, [customerOrders])

  async function completeOrder(order) {
    // console.log(id._id)
    await putCompletedOrder(order,"complete")
  }

  async function cancelOrder(order){
    await putCancelledOrder(order,"rejected")
  }

  return loading?(<SpinnerCircular size="10vmax" speed="110"/>):(
    <>
      <div style={{ display: 'flex', gap: '1vw', flexWrap: 'wrap' }}>

        {
          customerOrders.map((order) => {
            return <Card sx={{ maxWidth: "20vw" , height:"fit-content", minHeight:"15vh !important"}} key={order._id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://i.ibb.co/KmGCKfz/pending1.jpg"
              />
              <CardContent sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
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
              <CardActions sx={{width:"100%",display:"flex",justifyContent:"space-evenly",}}>
                {/* <Button size="small">{<MdLocalFireDepartment size={25} style={{ color: 'rgb(50,205,50' }} />}</Button> */}
                <Button variant="contained" onClick={() => { completeOrder(order) }} style={{ backgroundColor: 'rgb(50,205,50)' }} size="small">Complete</Button>
                <Button variant="contained" onClick={() => { cancelOrder(order) }} style={{ backgroundColor: '#ff3333' }} size="small">Cancel</Button>
              </CardActions>
            </Card>
          })
        }

      </div>
    </>

  );
}