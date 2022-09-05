import React, {useState} from "react";
import { Graphic } from "../../components/Graphic";
// import { LineChart } from "../../components/LineChart";
import axios from 'axios';

const URIStadistics = "http://localhost:8000/Stadistics/"

export function Stadistics(props){
    
    
    const [dateEarning,setDateEarning] = useState([]);
    const [fecha,setFecha] = useState("");

    const handleChange = async (event) =>{
        const dateSelect = event.target.value;
        
        const fecha = new Date(dateSelect);
        const fechaUTC = fecha.toUTCString();
        const date = await axios.get(URIStadistics + props.email + "/" + dateSelect);
        setDateEarning(date.data);
        setFecha(dateSelect);
        // console.log(fechaUTC);
        // const mes=(fechaUTC.getMonth()+1)<10?"0"+(fechaUTC.getMonth()+1):fechaUTC.getMonth()+1;
    }

    

    return(
        <div>
            <input type="month"
                className="form-control"
                onChange={handleChange}
            /> 
            { <Graphic dateEarning={dateEarning} fecha ={fecha} /> }
            
        </div>        
    )
}