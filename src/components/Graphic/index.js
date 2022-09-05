import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
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
} from "chart.js";
import { add } from "date-fns";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options = {
    responsive: true,
    scale: {
        y: {
            min: 0,
        },
    },
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

    // useEffect (()=>{
    //     inicializar();
    //     }
    // ,[])
 

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
        }

        props.dateEarning.forEach( earning => {
            const fecha = new Date(earning._id); 
            const dia = fecha.getDate();
            console.log(dia);
            earnings[dia] = earning.sumaEarnins;
            console.log("earning value"+earning.sumaEarnins);
            console.log("dia earning"+earnings[dia]);
        }

        )
    }

    inicializar();
    
    const data = { datasets: [ 
        {
            label: "Mis datos",
            data: earnings,
            tension: 0.3,
            borderColor: "rgb(75,192,192)",
            pointRadius: 8,
            pointBackgroundColor: "rgb(0,192,192)",
        },{
            label: "Mis datos 2",
            data: outgoings,
            tension: 0.3,
            borderColor: "rgb(0,142,192)",
            pointRadius: 8,
            pointBackgroundColor: "rgb(0,192,192)",
            }
    ], 
    labels,
    };

    return(
        <Line data={ data } options= { options } redraw = { true } />
    )
}