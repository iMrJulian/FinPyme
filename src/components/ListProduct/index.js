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
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export function ListProduct() {
    
  return (    
    <GridContainer>
    <Box sx={{ flexGrow: 1 }}>        
      <Grid container spacing={1}>
        {[0,1].map((value) => {
            return(
                <Grid item xs={12}>
                    <Item>
                    <div className = "Name">
                        <h3> Nombre productos </h3>    
                    </div>
                    <div className = "Stock">
                        <p> Disponibilidad inventario 0</p>                
                    </div>
                    <div className = "unitValue">
                        <p> Valor Unitario $ 0 </p>                
                    </div>
                    <div className = "valueCost">
                        <p> Costo Unitario $ 0 </p>                
                    </div>
                    </Item>
                </Grid> 
            )
        })}
               
      </Grid>
    </Box>
    </GridContainer>

  );
}