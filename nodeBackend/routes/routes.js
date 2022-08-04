import express from "express";
import { createUser, getAllUsers, getUser } from "../controllers/controller.js";

const router = express.Router();

router.get('/users',getAllUsers);
router.get('/users/:email',getUser);
router.post('/users/',createUser);

export default router;