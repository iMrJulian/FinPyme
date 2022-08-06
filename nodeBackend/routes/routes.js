import express from "express";
import { createEarning, createUser, getAllEarnings, getAllUsers, getEarningsUser, getUser } from "../controllers/controller.js";

const router = express.Router();

/* Rutas para la coleccion de usuarios */
router.get('/users',getAllUsers);
router.get('/users/:email',getUser);
router.post('/users/',createUser);

/* Rutas para la coleccion de ingresos */
router.get('/earnings',getAllEarnings);
router.get('/earnings/:email',getEarningsUser);
router.post('/earnings/',createEarning);

export default router;