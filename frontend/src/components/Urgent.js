import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdLocalFireDepartment } from 'react-icons/md'


import { getPendingCustomerOrders } from '../service/api';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { putCompletedOrder } from '../service/api';




export default function Urgent() {
  const user = useSelector(state => state.user.user);


  const [customerOrders, setcustomerOrders] = useState([])

  async function customerOrdersConfig() {
    const res = await getPendingCustomerOrders(user.username);

    setcustomerOrders(res.data);

  }

  useEffect(() => {
    customerOrdersConfig()
  }, [])

  function toCamelCase(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  async function completeOrder(order) {
    // console.log(id._id)
    await putCompletedOrder(order)
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '1vw', flexWrap: 'wrap' }}>

        {
          customerOrders.map((order) => {
            return <Card sx={{ maxWidth: 345 }} key={order.id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://i.ibb.co/KmGCKfz/pending1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {order.employee}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {order.profession}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {order.pincode}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {order.timeslot}
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">{<MdLocalFireDepartment size={25} style={{ color: 'rgb(50,205,50' }} />}</Button>
                <Button variant="contained" onClick={() => { completeOrder(order) }} style={{ backgroundColor: 'rgb(50,205,50' }} size="small">Pending</Button>
              </CardActions>
            </Card>
          })
        }

      </div>
    </>

  );
}