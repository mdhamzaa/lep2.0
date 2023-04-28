import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


function Actions() {

  const getActions = async () => {
    const data = await axios.get('/api/other/allQuery');
    setActions(data.data);
  }

  const [actions, setActions] = React.useState([])

  useEffect(() => {
    getActions();
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "2vw", flexWrap: "wrap", alignItems: "center" }}>
      {actions.map((item) => (
        <>
          <div>
            <Card sx={{ minWidth: 275, backgroundColor: "rgb(250,232,232)" }}>
              <CardContent>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  FirstName: {item.FirstName}
                </Typography>
                <Typography variant="h6" component="div">
                  Email: {item.Email}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Subject: {item.Subject}
                </Typography>
                <Typography variant="h7" color="text.primary" style={{ display: 'flex', gap: '1vw', flexWrap: 'wrap', width: '22vw', height: '12vh' }}>
                  {
                    item.Message
                  }
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ backgroundColor: "red" }} variant="contained">Active</Button>
              </CardActions>
            </Card>
          </div>
          <br />
        </>
      ))
      }
    </div>
  )
}

export default Actions