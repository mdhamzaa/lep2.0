import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { url } from '../service/api'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';

const columns = [
  { field: 'username', headerName: 'username', width: 200 },
  { field: 'email', headerName: 'email', width: 250 },
  { field: 'fname', headerName: 'First name', width: 180 },
  { field: 'lname', headerName: 'Last name', width: 120 },
  {
    field: 'phone',
    headerName: 'phone',
    type: 'number',
    width: 200,
  },
  {
    field: 'skills',
    headerName: 'Work',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'Control',
    headerName: '   Control',
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          <Button variant="contained" onClick={() => {
            // axios.delete(`${url}/${params.row.id}`).then((response) => {
            //   console.log(response.data);
            //   window.location.reload();
            // })
          }}>Delete</Button>
        </div>

      );
    }
  },
];


export default function Employees() {


  async function getdata() {
    const data = await axios.get('/api/users/getEmployee');
    setUsers(data.data);
  }



  const [users, setUsers] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const pp = [];


  return (
    <>
      <h1 style={{ fontWeight: 'bold' }} >Employees data</h1>
      <br />
      <div style={{ height: 400, width: '86vw' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.username}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
