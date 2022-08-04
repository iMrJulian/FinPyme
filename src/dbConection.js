const mongoose = require('mongoose');
//import mongoose from "mongoose";
//import { connect }  from 'mongoose/browser';

const user = "julian";
const password = "julian";
const coleccion = "finpyme";
const uri = "mongodb+srv://julian:<pepegrillo>@primercluster.rd6ecgf.mongodb.net/finpyme1?retryWrites=true&w=majority";

try {
  mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () =>
    console.log("connected"));
} catch (error) {
  console.log("nosepudo");
}

module.exports = mongoose;