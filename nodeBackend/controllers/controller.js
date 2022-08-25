import EarningModel from '../models/EarningModel.js';
import OutgoingModel from '../models/OutgoingModel.js';
import UserModel from '../models/UserModel.js'

//Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Obtener un usuario
export const getUser = async (req,res) => {
    try {
        const email = req.params.email;
        const user = await UserModel.findOne({email:email})
        .then( (user => {
            res.status(200).json(user);
        }));
    } catch (error) {
        res.json({message: error.message});
    }
}

//Crear un usuario
export const createUser = async (req,res) => {
    try {
        await UserModel.create(req.body); //el cuerpo del arreglo
        res.status(200).json({"message": "Usuario nuevo creado"});
    } catch (error) {
        res.json({message: error.message});
    }
}

//Obtener todos los ingresos
export const getAllEarnings = async (req, res) => {
    try {
        const earnings = await EarningModel.find();
        res.status(200).json(earnings);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Obtener todos los ingresos de un usuario
export const getEarningsUser = async (req, res) => {
    try {
        const email = req.params.email;
        const earnings = await EarningModel.find({
            'email': email
        })
        .then( ( earnings => {
            res.status(200).json(earnings);
        }));
    } catch (error) {
        res.json({message: error.message});
    }
}

//Crear ingresos
export const createEarning = async (req,res) => {
    try {
        await EarningModel.create(req.body);
        res.status(200).json({"message": "Ingreso nuevo creado"});
    } catch (error) {
        res.json({message: error.message});
    }
}
//Resumen ingresos
export const sumaryEarning = (req,res) => {
    const totalEarning = getAllEarnings(req);
    console.log(totalEarning);
}

//Crear egresos
export const createOutgoing = async (req,res) => {
    try{
        await OutgoingModel.create(req.body);
        res.status(200).json({"message":"Egreso nuevo creado"});
    }catch(error){
        res.json({message: error.message});
    }
}
//Resumen egresos
export const getAllOutgoing = async (req,res)=>{
    try {
        const outgoing = await OutgoingModel.find();
        res.status(200).json(outgoing);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Obtener todos los egresos de un usuario
export const getOutgoingUser = async (req, res) => {
    try {
        const email = req.params.email;
        const outgoing = await OutgoingModel.find({
            'email': email
        })
        .then( ( outgoing => {
            res.status(200).json(outgoing); //convierte el outgoing en formato json
        }));
    } catch (error) {
        res.json({message: error.message});
    }
}

//obtener ingresos de un usuario con fecha
export const getEarningsUserDate = async (req, res) => {
    try {
        const email = req.params.email;
        const date = new Date(req.params.date);
        const date2 = new Date(req.params.date);
        date2.setDate(date2.getDate()+1);        
        const earnings = await EarningModel.find({
            'email': email,
            'date':{
                "$gte": date, 
                "$lt": date2
            }            
        })
        .then( ( earnings => {
            res.status(200).json(earnings);
            console.log(earnings);
        }));
    } catch (error) {
        res.json({message: error.message});
    }
}

//obtener egresos de un usuario con fecha
export const getOutgoingUserDate = async (req, res) => {
    try {
        const email = req.params.email;
        const date = req.params.date;
        const date2 = new Date(req.params.date);
        date2.setDate(date2.getDate()+1);  
        const outgoing = await OutgoingModel.find({
            'email': email,
            'date':{
                "$gte": date, 
                "$lt": date2
            }
        })
        .then( ( outgoing => {
            res.status(200).json(outgoing); //convierte el outgoing en formato json
        }));
    } catch (error) {
        res.json({message: error.message});
    }
}