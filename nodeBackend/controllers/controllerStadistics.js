import EarningModel from "../models/EarningModel.js";
import OutgoingModel from "../models/OutgoingModel.js";

//Obtener las estadisticas de los ingresos
export const getStadisctisEarningUserDate = async (req, res) => {
    try {
        
        const email = req.params.email;
        const date = new Date(req.params.date);
        var date2 = new Date(req.params.date);
        date2 = monthSwitch(date2);     
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
        }));
    } catch (error) {
        res.json({message: error.message});
    }
}

//Obtener las estadisticas de los egresos
export const getStadisctisOutgoingUserDate = async (req, res) => {
        try{
            const email = req.params.email;        
            const date = new Date(req.params.date);
            var date2 = new Date(req.params.date);
            date2 = monthSwitch(date2);
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

//Categorias Ingresos
export const getStadisticsEarningCategory = async (req,res) => {
    try {
            const email = req.params.email;        
            const date = new Date(req.params.date);
            var date2 = new Date(req.params.date);
            date2 = monthSwitch(date2);
            const earningCategory = await EarningModel.aggregate(
                [
                    {$match:{
                        email: email,
                        'date':{
                             "$gte": date, 
                             "$lt": date2
                        }   
                    }},
                    {$group:{
                            _id: '$concept',
                            sumaEarning: {$sum: '$value'}
                        }
                    }   
                ]   
            )
            .then( ( earningCategory => {
                res.status(200).json(earningCategory);
            }));
    } catch (error) {
        res.json({message: error.message});
    }
}

//Categorias Egresos
export const getStadisticsOutgoingCategory = async (req,res) => {
    try {
            const email = req.params.email;        
            const date = new Date(req.params.date);
            var date2 = new Date(req.params.date);
            date2 = monthSwitch(date2);
            const outgoingCategory = await OutgoingModel.aggregate(
                [
                    {$match:{
                        email: email,
                        'date':{
                             "$gte": date, 
                             "$lt": date2
                        }   
                    }},
                    {$group:{
                            _id: '$category',
                            sumaOutgoing: {$sum: '$value'}
                        }
                    }   
                ]   
            )
            .then( ( outgoingCategory => {
                res.status(200).json(outgoingCategory);
            }));
    } catch (error) {
        res.json({message: error.message});
    }
}

//Obtiene el siguiente mes
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
