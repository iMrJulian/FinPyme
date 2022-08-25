import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { GridContainer } from './styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function inventoryFeatures() {
    
  return (
    <GridContainer>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <div className = "Productos">
                <p> Cantidad productos </p>
                <p> $ 0 </p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div className = "Costo">
                <p> Costo total </p>
                <p> $ 0 </p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </GridContainer>

  );
}