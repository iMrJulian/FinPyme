import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Home } from './pages/Home';
import { Budget } from './pages/Budget';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inventory } from './pages/Inventary';
import { Earnings } from './pages/Earnings';
import { Outgoings } from './pages/Outgoings';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
