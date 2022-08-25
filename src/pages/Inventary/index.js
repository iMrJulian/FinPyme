import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Utilities } from "../../components/Utilities";
import { ButtonInventory } from "../../components/ButtonInventory";
import { ListComponent } from "../../components/List";
import axios from 'axios';
import { inventoryFeatures } from "../../components/inventaryFeatures";
import { ListProduct } from "../../components/ListProduct";

const URIproducts = "http://localhost:8000/products/"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export function Inventory(props){

    const[listProducts,setListProduct] = useState([])
    useEffect(()=>{
      //funciones
    },[])

    const products = async () =>{
      const products = await axios.get(URIproducts + props.email);
      
      
    }

    return(
        <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item> 
              {inventoryFeatures()}           
          </Item>
          <Item> { ListProduct() } </Item>          
          <Item> { ButtonInventory(props) } </Item>
        </Stack>
      </Box>
    )
}