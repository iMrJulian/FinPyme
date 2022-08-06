import { Login } from "./components/Login";
import { SignUp } from './components/SignUp';
import { Home } from './pages/Home';
import { Budget } from './pages/Budget';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inventory } from './pages/Inventary';
import { Earnings } from './pages/Earnings';
import { Outgoings } from './pages/Outgoings';
import React from "react";


function App() {

  const [email, setEmail] = React.useState(null);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login setEmail = {setEmail} /> } />
          <Route path="/signup" element={ <SignUp setEmail = {setEmail}/> } />
          <Route path="/home/*" element={ <Home/> }>
            <Route path ="budget" element={ <Budget email={email}/> } />
            <Route path ="inventary" element={ <Inventory email={email}/> } />
            <Route path ="earnings" element={ <Earnings email={email}/> } />
            <Route path ="outgoings" element={ <Outgoings email={email}/> } />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
