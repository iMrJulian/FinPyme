import EarningModel from "../models/EarningModel.js";
import OutgoingModel from "../models/OutgoingModel.js";

//Obtener las estadisticas de los ingresos
export const getStadisctisEarningUserDate = async (req, res) => {
    try {
        
        const email = req.params.email;
        // const month = req.params.month;
        const date = new Date(req.params.date);
        const date2 = new Date(req.params.date);
        // console.log(date.getMonth());
        switch(date.getMonth()+2){
            case 13:
                // console.log("Enero");
                date2.setDate(date2.getDate()+31);
                break;
            case 2:
                // console.log("febrero");
                if(date.getFullYear()%400 == 0){
                    date2.setDate(date2.getDate()+29);
                    // console.log("Biciesto1");
                }
                else if(date.getFullYear()%4==0 && date.getFullYear()%100!=0){
                    date2.setDate(date2.getDate()+29);
                    // console.log("Biciesto2");
                }
                else{
                    date2.setDate(date2.getDate()+28);
                    // console.log("No Biciesto");
                }                
                break;
            case 3:
                // console.log("Marzo");
                date2.setDate(date2.getDate()+31);
                break;
            case 4:
                // console.log("Abril");
                date2.setDate(date2.getDate()+30);
                break;
            case 5:
                // console.log("Mayo");
                date2.setDate(date2.getDate()+31);
                break;
            case 6:
                // console.log("Junio");
                date2.setDate(date2.getDate()+30);
                break;
            case 7:
                // console.log("Julio");
                date2.setDate(date2.getDate()+31);
                break;
            case 8:
                // console.log("Agosto");
                date2.setDate(date2.getDate()+31);
                break;
            case 9:
                // console.log("Septiembre");
                date2.setDate(date2.getDate()+30);
                break;
            case 10:
                // console.log("Octubre");
                date2.setDate(date2.getDate()+31);
                break;
            case 11:
                // console.log("Noviembre");
                date2.setDate(date2.getDate()+30);
                break;
            case 12:
                // console.log("Diciembre");
                date2.setDate(date2.getDate()+31);
                break;  
        }   
        // date2.setMonth(date.getMonth()+1);        
        // console.log(date2);        
        const earningsStadistics = await EarningModel.aggregate(
            [
                {$match:{
                    email: email,
                    'date':{
                         "$gte": date, 
                         "$lt": date2
                    }   
                }},
                {$group:{
                        _id: '$date',
                        sumaEarnins: {$sum: '$value'}
                    }
                }   
            ]
                 
               
                  
        )
        .then( ( earningsStadistics => {
            res.status(200).json(earningsStadistics);
            // console.log(earningsStadistics);
        }));
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getStadisctisOutgoingUserDate = async (req, res) => {
        try{
            const email = req.params.email;        
            const date = new Date(req.params.date);
            var date2 = new Date(req.params.date);
            // console.log("date" + date);
            
            date2 = monthSwitch(date2);
            // console.log("date2" + date2);

            const outgoingStadistics = await OutgoingModel.aggregate(
                [
                    {$match:{
                        email: email,
                        'date':{
                             "$gte": date, 
                             "$lt": date2
                        }   
                    }},
                    {$group:{
                            _id: '$date',
                            sumaOutgoing: {$sum: '$value'}
                        }
                    }   
                ]
                     
                   
                      
            )
            .then( ( outgoingStadistics => {
                res.status(200).json(outgoingStadistics);
            }));        
        } 
        catch (error) {
            res.json({message: error.message});
        }
}



const monthSwitch = (date2) => {
    switch(date2.getMonth()+2){
        case 13:
            date2.setDate(date2.getDate()+31);
            break;
        case 2:
            if(date2.getFullYear()%400 == 0){
                date2.setDate(date2.getDate()+29);
            }
            else if(date2.getFullYear()%4==0 && date2.getFullYear()%100!=0){
                date2.setDate(date2.getDate()+29);
            }
            else{
                date2.setDate(date2.getDate()+28);
            }                
            break;
        case 3:
            date2.setDate(date2.getDate()+31);
            break;
        case 4:
            date2.setDate(date2.getDate()+30);
            break;
        case 5:
            date2.setDate(date2.getDate()+31);
            break;
        case 6:
            date2.setDate(date2.getDate()+30);
            break;
        case 7:
            date2.setDate(date2.getDate()+31);
            break;
        case 8:
            date2.setDate(date2.getDate()+31);
            break;
        case 9:
            date2.setDate(date2.getDate()+30);
            break;
        case 10:
            date2.setDate(date2.getDate()+31);
            break;
        case 11:
            date2.setDate(date2.getDate()+30);
            break;
        case 12:
            date2.setDate(date2.getDate()+31);
            break;  
    }
    return date2;
}
