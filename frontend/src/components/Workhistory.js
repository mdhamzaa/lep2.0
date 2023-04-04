import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


const columns = [
  { field: 'employee', headerName: 'Employee', width: 150 },
  { field: 'customer', headerName: 'Customer', width: 130 },
  { field: 'date', headerName: 'Date', width: 230 },
  { field: 'timeslot', headerName: 'Time Slot', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },

];


export default function Workhistory() {
  async function getdata() {
    const data = await axios.get('/api/users/order');
    setUsers(data.data);
  }

  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    getdata();
  }, []);


  return (
    <>
      <h1 style={{ fontWeight: 'bold' }} >Work History</h1>
      <br />
      <div style={{ height: 400, width: '90vw' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      </div>
    </>

  );
}
