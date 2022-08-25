import React from 'react'
import './full.css'
import './home.css'
import './table.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboardpage from './Components/Dashboardpage';

import Productsdetails from './Components/Productsdetails';
import Addproductpage from './Components/Addproductpage';
import { useState } from "react";
import { Col, Row } from 'antd';

export const ProductContext = createContext();

function App() {
  
  const [ productcolors, setProductcolors] = useState(['#0088FE', '#00C49F', '#FFBB28', '#FF8042']);
  const [productlists, setProductLists] = useState([
    {
      id: "1",
      productname: "Adidas Running Shoes",
      price: "8999",
      description: "Fluo Adidas Running Shoes For Men.Great Everyday Shoes For Runners To Go That Extra Mile. ",
      colors: ['1','0', '2'],
      category: "men",
      status: "available",
      quantity: "10"
    },
    {
      id: 2,
      productname: "Adidas Running Shoes",
      price: 7999,
      description: "Fluo Adidas Running Shoes For Women.Great Everyday Shoes For Runners To Go That Extra Mile. ",
      colors: [1, 3, 0],
      category: "women",
      status: "not available",
      quantity: 0
    },
    {
      id: 3,
      productname: "Adidas Casual Shoes",
      price: 3599,
      description: "Synthetic upper with Forefoot perforations for breathability. SOLE :- MBI Sole: Rubber outsole with protruding lugs for a perfect grip on different terrains and wet, slippery surfaces Lightweight EVA midsole for comfort and optimum foot support. ",
      colors: [0, 3, 2],
      category: "men",
      status: "available",
      quantity: 13
    },
    {
      id: 4,
      productname: "Adidas Casual Shoes",
      price: 3299,
      description: "Synthetic upper with Forefoot perforations for breathability. SOLE :- MBI Sole: Rubber outsole with protruding lugs for a perfect grip on different terrains and wet, slippery surfaces Lightweight EVA midsole for comfort and optimum foot support. ",
      colors: [1, 2],
      category: "women",
      status: "available",
      quantity: 12
    },
    {
      id: 5,
      productname: "Crocs",
      price: 1099,
      description: "Light Weight Synthetic Upper & EVA Sole offers all day comfort. Perfect fit hook & loop shoes makes it easy to wear and offers customised fit according to foot-size.",
      colors: [1, 3, 2],
      category: "Kids",
      status: "available",
      quantity: 13
    },
    {
      id: 6,
      productname: "Crocs",
      price: 1999,
      description: "Light Weight Synthetic Upper & EVA Sole offers all day comfort. Perfect fit hook & loop shoes makes it easy to wear and offers customised fit according to foot-size. ",
      colors: [1, 3, 2],
      category: "kids",
      status: "available",
      quantity: 8
    }
  ]);
  return (
    <div className="App">
       <ProductContext.Provider value={{ productlists,setProductLists, productcolors, setProductcolors }} > 
      
     <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/dashboardpage' element={<Dashboardpage />}></Route>
          <Route exact path='/productsdetails/:id' element={<Productsdetails />}></Route>
          <Route exact path='/addproductpage' element={<Addproductpage />}></Route>
        </Routes>


      </BrowserRouter>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
