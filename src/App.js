import React from 'react'
import './content.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboardpage from './Components/Dashboardpage';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/dashboardpage' element={<Dashboardpage />}></Route>
          
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
