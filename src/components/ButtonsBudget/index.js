import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link as LinkRouter, useNavigate, useHref} from 'react-router-dom'

export function ButtonsBudget() {

  const navigate = useNavigate();

    const handleIngresos = (event) => {
      event.preventDefault();
      console.log(navigate("/home/earnings",{replace: true}));
    };

    const handleEgresos = (event) => {
      event.preventDefault();
      console.log(navigate("/home/outgoings",{replace: true}));
    };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained"  onClick={handleIngresos}>
        Ingresos
      </Button>
      <Button variant="contained" onClick={handleEgresos}>
        Egresos
      </Button>
    </Stack>
  );
}