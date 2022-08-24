import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Utilities } from "../../components/Utilities";
import { ButtonsBudget } from "../../components/ButtonsBudget";
import { ListComponent } from "../../components/List";
import axios from 'axios';

const URIearning = "http://localhost:8000/earnings/"
const URIoutgoing = "http://localhost:8000/outgoings/"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Budget(props){ // props todo el arreglo que recibo

    const [sumaEarnings,setSumaEarning] = useState([])
    const[sumaOutgoings,setSumaOutgoing] = useState([])
    const[utilitiesDate,setUtilitiesDate] = useState([])
    const[earnings,setEarnings] = useState([])
    const[outgoings,setOutgoings] = useState([])
    useEffect(()=>{
      totalEarnings();
      totalOutgoings();
    },[])   

    const totalEarnings = async () =>{
      const earnings = await axios.get(URIearning + props.email);
      var sumaEarning=0;
      //console.log(earnings.data);
      earnings.data.forEach(earning => {          
        sumaEarning +=earning.value;
      });
      setSumaEarning(sumaEarning);
    }          

    const totalOutgoings = async () =>{
      const outgoings = await axios.get(URIoutgoing + props.email);
      var sumaOutgoing=0;
      outgoings.data.forEach(outgoing=>{
        sumaOutgoing += outgoing.value;
      });
      setSumaOutgoing(sumaOutgoing);
    }    

    const handleChange = async (event) =>{
      const dateSelect = event.target.value;
      const earnings = await axios.get(URIearning + props.email + "/" + dateSelect);
      var sumaEarning=0;  
      
      earnings.data.forEach(earning => {          
        sumaEarning +=earning.value;
      });      

      const outgoings = await axios.get(URIoutgoing + props.email + "/" + dateSelect);
      var sumaOutgoing=0;
      outgoings.data.forEach(outgoing=>{
        sumaOutgoing += outgoing.value;
      });
      setEarnings(earnings.data);
      setOutgoings(outgoings.data);
      const utilitiesDate = sumaEarning - sumaOutgoing;
      setUtilitiesDate(utilitiesDate);
    }

    const diaActual = Date.now(); // los milisegundos
    const hoy = new Date(diaActual); //le paso la fecha
    const dia=(hoy.getDate())<10?"0"+(hoy.getDate()):hoy.getDate();
    const mes=(hoy.getMonth()+1)<10?"0"+(hoy.getMonth()+1):hoy.getMonth()+1;

    const FechaActual = hoy.getFullYear()+"-"+mes+"-"+dia;

    return(
        <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item> { Utilities(sumaEarnings,sumaOutgoings) } </Item>
          <Item>
              <input  
                name="requested_order_ship_date"  
                type="date" 
                className="form-control"
                onChange={handleChange}
              />
              $ {utilitiesDate}              
          </Item>
          <Item> { ListComponent(earnings,outgoings) }</Item>
          <Item> { ButtonsBudget(props) } </Item>
        </Stack>
      </Box>
    )
}