//const mongoose = require('mongoose');
import mongoose from "mongoose";
//import { connect }  from 'mongoose/browser';

const user = "admin";
const password = "w0uEuGHrpNyGXSde";
const coleccion = "finpyme";
const uri = `mongodb+srv://${user}:${password}@cluster0.w11tdf8.mongodb.net/${coleccion}?retryWrites=true&w=majority`;

try {
  mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () =>
    console.log("connected"));
} catch (error) {
  console.log("nosepudo");
}

const dbConnection = mongoose.connection;

dbConnection.on('open', () => {
    console.log("Connectado a la BD");
})
dbConnection.on('error', () => {
    console.log("Error al connectar a la BD");
})

export default dbConnection;