import React, { useEffect } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { WrapperGraphics } from "./styles";
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: "43%",
    height: "25%",
    color: theme.palette.text.secondary,
  }));

const options = {
    responsive: true,
    // scale: {
    //     y: {
    //         min: 0,
    //     },
    // },
    plugins: {
        legend: {
            display: true,            
        }
    }
}

export function Graphic(props){

    var earnings = [];
    var outgoings = [];
    var labels = [];    
    var budget = [];
    var valueEarning = [];
    var conceptEarning = [];
    var valueOutgoing = [];
    var conceptOutgoing = [];

    props.dateEarning.forEach(earning => {
         
         
     });

     const inicializar = () => {
        const separador = props.fecha.split('-');        
        const year = parseInt(separador[0],10);
        const month = parseInt(separador[1],10);
        var dias = 0;
        
        switch(month){
            case 1:
                dias = 31;
                break;
            case 2:
                if(year%400 == 0){
                    dias = 29;
                }
                else if(year%4==0 && year%100!=0){
                    dias = 29;
                }
                else{
                    dias = 28;
                }                
                break;
            case 3:
                dias = 31;
                break;
            case 4:
                dias = 30;
                break;
            case 5:
                dias = 31;
                break;
            case 6:
                dias = 30;
                break;
            case 7:
                dias = 31;
                break;
            case 8:
                dias = 31;
                break;
            case 9:
                dias = 30;
                break;
            case 10:
                dias = 31;
                break;
            case 11:
                dias = 30; 
                break;
            case 12:
                dias = 31;
                break;  
        }   

        for(var i=1; i <= dias; i++){
            labels [i-1] = i;
            earnings [i-1] = 0;
            outgoings [i-1] = 0;
            budget [i-1] = 0;
        }

        props.dateEarning.forEach( earning => {
            const fecha = new Date(earning._id); 
            const dia = fecha.getDate();
            earnings[dia] = earning.sumaEarnins;
            budget[dia] = earning.sumaEarnins;
        })
        
        props.dateOutgoing.forEach( outgoing => {
            const fecha = new Date(outgoing._id);
            const dia = fecha.getDate();
            outgoings[dia] = outgoing.sumaOutgoing;
            budget[dia] = budget[dia] - outgoing.sumaOutgoing;
        })
        
        props.categoryEarning.forEach( earning=>{
            conceptEarning.push(earning._id);
            valueEarning.push(earning.sumaEarning);
        })

        props.categoryOutgoing.forEach( outgoing =>{
            conceptOutgoing.push(outgoing._id);
            valueOutgoing.push(outgoing.sumaOutgoing);
        })

    }

    inicializar();
    
    const data = { datasets: [ 
        {
            label: "Ingresos",
            data: earnings,
            tension: 0.3,
            borderColor: "#00c04b",
            pointRadius: 4,
            pointBackgroundColor: "#00c04b",
        },{
            label: "Egresos",
            data: outgoings,
            tension: 0.3,
            borderColor: "rgb(255,22,12)",
            pointRadius: 4,
            pointBackgroundColor: "rgb(255,22,12)",
            }
    ], 
    labels,
    };

    const dataBudget ={ datasets: [
        {
            label: "Balance",
            data: budget,
            tension: 0.3,
            borderColor: "rgb(75,192,192)",
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,192,192)",
        }
    ],
    labels,
    };

    const categoryEarning ={ 
        labels: conceptEarning, 
        datasets: [
        {
            label: "Ingresos",
            data: valueEarning,
            tension: 0.3,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 1,
        }
    ],
    conceptEarning,
    };

    const categoryOutgoing ={ 
        labels: conceptOutgoing, 
        datasets: [
        {
            label: "Egresos",
            data: valueOutgoing,
            tension: 0.3,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 1,
        }
    ],
    conceptOutgoing,
    };

    return(
        <WrapperGraphics>     
            <Line data={ data } options= { options } updateMode = { true }/>
            <Line data={ dataBudget } options= { options } updateMode = { true }/>
            <Box sx={{ width: '100%' }}>
            <Stack 
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}  
                justifyContent="center" 
                alignItems="center" 
                spacing={1}
            >
                <Item> <Doughnut data={ categoryEarning } options= { options } updateMode = { true }/> </Item>
                <Item> <Doughnut data={ categoryOutgoing } options= { options } updateMode = { true }/> </Item>
            </Stack> 
            </Box>                  
        </WrapperGraphics>  
    )
}