import React, { useState } from 'react';
import { Button } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { rows } from '../utils/productData.tsx'

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

interface IItem {
  title: string,
  description: string,
  image: string,
  price: number,
}


const Products = () => {

  const [cart, setCart] = useState<IItem[]>([]);
  const [selectedRows, setSelectedRows] = React.useState<IItem[]>([]);

  const navigate = useNavigate();

  const toCart = () => {
    navigate('/cart',{state:[...cart]});
  }

  return (
    <>
      <h1 style={{ textAlign: "center"}}>Storefront</h1>
      <div>
        <Button variant="contained" onClick={() => {setCart([...cart, ...selectedRows])}} style={{ margin: "10px" }}>Add Selected Items to Cart</Button>
        <Button variant="contained" onClick={() => {toCart()}} style={{ margin: "10px" }}>View Cart: {cart.length} Items</Button>
      </div>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowHeight={() => 'auto'}
          onRowSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = rows.filter((row) =>
              selectedIDs.has(row.id),
            );
  
            setSelectedRows(selectedRows);
          }}
        />
      </div>
    </>
  );
}

export default Products