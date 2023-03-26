
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Done from './Done'
import Urgent from './Urgent'
import Missed from './Missed'
export default function Bookings() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '92vw', typography: 'body1',minHeight:"60vh", height:"fir-content",
    }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{ marginLeft: '10vw' }} label="Done" value="1" />
            <Tab sx={{ marginLeft: '20vw' }} label="Pending" value="2" />
            <Tab sx={{ marginLeft: '20vw' }} label="Cancelled" value="3" />
          </TabList>
        </Box>
        
        <div id="bookingContainer">
          <TabPanel value="1">{<Done />}</TabPanel>
          <TabPanel value="2" >{<Urgent />}</TabPanel>
          <TabPanel value="3">{<Missed />}</TabPanel>
        </div>
      </TabContext>
    </Box>
  );
}