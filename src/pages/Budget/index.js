import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Utilities } from "../../components/Utilities";
import { ButtonsBudget } from "../../components/ButtonsBudget";
import axios from 'axios';

const URIearning = "http://localhost:8000/earnings"
const URIoutgoings = "http://localhost:8000/outgoings"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Budget(props){

    const totalEarnings = async () =>{
      const earnings = await axios.get(URIearning+props.email);
    }

    //totalEarnings();

    return(
        <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item> { Utilities(props) } </Item>
          <Item>
              <input  
                name="requested_order_ship_date"  
                type="date" 
                className="form-control"
              />
              $0
          </Item>
          <Item> </Item>
          <Item> { ButtonsBudget(props) } </Item>
        </Stack>
      </Box>
    )
}