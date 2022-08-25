import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link as LinkRouter, useNavigate, useHref} from 'react-router-dom'

export function ButtonInventory() {

  const navigate = useNavigate();

    const handleProductos = (event) => {
      event.preventDefault();//no se recargue la pagina 
      navigate("/home/products",{replace: true});     
    };

  return (
    <Stack direction="row" justifyContent="center">
      <Button variant="contained"  onClick={handleProductos}>
        Crer nuevo producto
      </Button>      
    </Stack>
  );
}