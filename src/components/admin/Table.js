import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'employeeName',
    headerName: 'Employee name',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Employee email',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 200,
  },
  {
    field: 'department',
    headerName: 'Department ',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 160,
  },
  {
    field: 'contactNumber',
    headerName: 'Contact Number',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 180,
  },
  {
    field: 'joiningDate',
    headerName: 'Joining Date',
    width: 180,
  }
];

const rows = [
  { id: 1, employeeName: 'Snow',email:'john@gmail.com', department:'some', contactNumber:'77777', joiningDate:'1/1/1' },
  { id: 2, employeeName: 'Mow',email:'mohn@gmail.com', department:'some', contactNumber:'77777', joiningDate:'1/1/1' },
  { id: 3, employeeName: 'Snow',email:'john@gmail.com', department:'some', contactNumber:'77777', joiningDate:'1/1/1' },
  { id: 4, employeeName: 'Mow',email:'mohn@gmail.com', department:'some', contactNumber:'77777', joiningDate:'1/1/1' },
  { id: 5, employeeName: 'Snow',email:'john@gmail.com', department:'some', contactNumber:'77777', joiningDate:'1/1/1' },
  { id: 6, employeeName: 'Mow',email:'mohn@gmail.com', department:'some', contactNumber:'77777', joiningDate:'1/1/1' },
  
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '75%', padding:'20px', margin:'20px, 0' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

