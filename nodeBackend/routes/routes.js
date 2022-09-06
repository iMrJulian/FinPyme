import express from "express";
import { createEarning, createUser, getAllEarnings, getAllUsers, getEarningsUser, getUser, sumaryEarning, createOutgoing, getAllOutgoing, getOutgoingUser, getEarningsUserDate,getOutgoingUserDate } from "../controllers/controller.js";
import { createProducts, getUserProducts } from "../controllers/controllerProducts.js";
import { getStadisctisEarningUserDate,getStadisctisOutgoingUserDate,getStadisticsEarningCategory,getStadisticsOutgoingCategory } from "../controllers/controllerStadistics.js";

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
router.get('/products/:email',getUserProducts);
router.post('/products/',createProducts);

/*Rutas para las estadisticas */
router.get('/stadisticsEarnings/:email/:date',getStadisctisEarningUserDate);
router.get('/stadisticsOutgoings/:email/:date',getStadisctisOutgoingUserDate);
router.get('/stadisticsCategoryEarning/:email/:date',getStadisticsEarningCategory);
router.get('/stadisticsCategoryOutgoing/:email/:date',getStadisticsOutgoingCategory);

export default router;