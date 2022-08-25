import ProductModel from '../models/ProductModel.js';

//Crear productos
export const createProducts = async (req, res) => {
    try {
        await ProductModel.create(req.body);//el cuerpo del arreglo
        res.status(200).json({"message": "Producto nuevo creado"});
    } catch (error) {
        res.json({message: error.message});
    }
}