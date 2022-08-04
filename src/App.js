import { Login } from "./components/Login";
import { SignUp } from './components/SignUp';
import { Home } from './pages/Home';
import { Budget } from './pages/Budget';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inventory } from './pages/Inventary';
import { Earnings } from './pages/Earnings';
import { Outgoings } from './pages/Outgoings';

// const Login = require('./components/Login');
// const SignUp = require('./components/SignUp');
// const Home = require('./pages/Home');
// const Budget = require('./pages/Budget');
// const { BrowserRouter, Routes, Route } = require("react-router-dom");
// const Inventory = require('./pages/Inventary');
// const Earnings = require('./pages/Earnings');
// const Outgoings = require('./pages/Outgoings');

//import mongoose from "mongoose";
//const mongoose = require('mongoose/browser');
// import { connect }  from 'mongoose/browser';

// const user = "julian";
// const password = "julian";
// const coleccion = "finpyme";
// const uri = "mongodb+srv://julian:<pepegrillo>@primercluster.rd6ecgf.mongodb.net/finpyme1?retryWrites=true&w=majority";

// try {
//   connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }, () =>
//     console.log("connected"));
// } catch (error) {
//   console.log(error);
// }


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/signup" element={ <SignUp/> } />
          <Route path="/home/*" element={ <Home/> }>
            <Route path ="budget" element={ <Budget/> } />
            <Route path ="inventary" element={ <Inventory/> } />
            <Route path ="earnings" element={ <Earnings/> } />
            <Route path ="outgoings" element={ <Outgoings/> } />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
