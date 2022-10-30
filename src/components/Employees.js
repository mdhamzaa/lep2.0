import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'Work', headerName: 'Work', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Work: 'carpenter' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, Work: 'carpenter' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, Work: 'carpenter' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , Work: 'carpenter'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Work: 'carpenter' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, Work: 'carpenter' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Work: 'carpenter' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, Work: 'carpenter' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, Work: 'carpenter' },
];

export default function Employees() {
  return (
    <>
    <h1 style={{ fontWeight: 'bold' }} >Employees data</h1>
    <br/>
    <div style={{ height: 400, width: '90vw' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
    
  );
}
