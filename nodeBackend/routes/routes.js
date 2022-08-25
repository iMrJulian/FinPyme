import express from "express";
import { createEarning, createUser, getAllEarnings, getAllUsers, getEarningsUser, getUser, sumaryEarning, createOutgoing, getAllOutgoing, getOutgoingUser, getEarningsUserDate,getOutgoingUserDate } from "../controllers/controller.js";
import { createProducts } from "../controllers/controllerProducts.js";

const router = express.Router();

/* Rutas para la coleccion de usuarios */
router.get('/users',getAllUsers);
router.get('/users/:email',getUser);
router.post('/users/',createUser);

/* Rutas para la coleccion de ingresos */
router.get('/earnings/',getAllEarnings);
router.get('/earnings/:email',getEarningsUser); // paso un usuario
router.post('/earnings/',createEarning); // creo un usuario

/*Rutas para la colección*/
router.get('/outgoings/',getAllOutgoing);
router.get('/outgoings/:email',getOutgoingUser);
router.post('/outgoings/',createOutgoing);

/*Rutas para la fecha*/
router.get('/earnings/:email/:date',getEarningsUserDate);
router.get('/outgoings/:email/:date',getOutgoingUserDate);

/*Rutas para los productos*/
router.post('/products/',createProducts);
export default router;