import React from 'react';
import { Button } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {useLocation} from 'react-router-dom';

const columns: GridColDef[] = [
  { 
    field: 'image', 
    headerName: 'Product Image', 
    renderCell: (params) => {
      return <img style={{ height: '75%', width: '75%', objectFit: 'contain'}} src={params.row.image} />;
    },
    width: 200 },
  { field: 'title', headerName: 'Title', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    valueGetter: (params) => {
      return `\$ ${params.row.price}`;
    },    
    width: 90,
  },
  { 
    field: 'description', 
    headerName: 'Product Description', 
    renderCell: (params) => {
      return <p>{params.row.description}</p>;
    },
    width: 900 },
];


const Cart = () => {

  const location = useLocation();

  return (
    <>
      <h1 style={{ textAlign: "center"}}>Cart</h1>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={location.state}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          getRowHeight={() => 'auto'}
        />
      </div>
      <div>
        <Button variant="contained" style={{ margin: "10px" }}>Confirm Order</Button>
      </div>
    </>
  );
}

export default Cart