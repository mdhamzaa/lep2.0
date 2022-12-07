import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { fontWeight } from '@mui/system';

const columns = [
  { id: 'do', label: '', minWidth: 70 },
  { id: 'name', label: 'Date', minWidth: 170 },
  { id: 'code', label: 'Workedfor', minWidth: 180 },
  {
    id: 'population',
    label: 'Phone Number',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Address',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'd',
    label: '',
    minWidth: 90,
    align: 'middle',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('1-1-2002', 'Akhil', "8079996999", "Street:  4-1-590, Troop Bazar"),
  createData('1-1-2002', 'AkhilTej', "1403500365", "Street:  E/1, Turbhe, Navi"),
  createData('1-1-2002', 'Hamza k', "6048393789", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002 ', 'Yash', "9048393789", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Hamza', "9376052103", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Yash', "9254755400", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Akhil', "9830192300", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Hamza', "9948570030", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Hamza', "9126577691", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Akhil', "9126317000", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Hamza', "9670220000", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Hamza', "9967545757", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Akhil', "9146793744", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Hamza', "9200962417", "Street:  Super Mall, Nr Navrangpura"),
  createData('1-1-2002', 'Akhil', "9210147125", "Street:  Super Mall, Nr Navrangpura"),
];
export default function History() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  var cc = 700
  return (
    <>
      <h1>History</h1>
      <Paper sx={{ width: '86vw', padding: '3%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader={true} aria-label="sticky table">
            <TableHead>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 700 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}