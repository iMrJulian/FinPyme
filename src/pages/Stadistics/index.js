import React, {useState} from "react";
import { Graphic } from "../../components/Graphic";
// import { LineChart } from "../../components/LineChart";
import axios from 'axios';

const URIStadisticsEarning = "http://localhost:8000/stadisticsEarnings/"
const URIStadisticsOutgoing = "http://localhost:8000/stadisticsOutgoings/"

export function Stadistics(props){
    
    
    const [dateEarning,setDateEarning] = useState([]);
    const [dateOutgoing,setDateOutgoing] = useState([]);
    const [fecha,setFecha] = useState("");

    const handleChange = async (event) =>{
        //Obtener los ingresos por día
        const dateSelect = event.target.value;
        const dateEarnings = await axios.get(URIStadisticsEarning + props.email + "/" + dateSelect);
        setDateEarning(dateEarnings.data);
        setFecha(dateSelect);
        //Obtener los egresos por día
        const dateOutgoings = await axios.get(URIStadisticsOutgoing + props.email + "/" + dateSelect);
        setDateOutgoing(dateOutgoings.data);
        // console.log(dateOutgoings.data);
    }

    

    return(
        <div>
            <input type="month"
                className="form-control"
                onChange={handleChange}
            /> 
            { <Graphic dateEarning={dateEarning} dateOutgoing={dateOutgoing} fecha ={fecha} /> }
            
        </div>        
    )
}