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
        await UserModel.create(req.body);
        res.status(200).json({"message": "Usuario nuevo creado"});
    } catch (error) {
        res.json({message: error.message});
    }
}