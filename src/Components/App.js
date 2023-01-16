import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts,{AddProducts,Products,MyCart,Home} from "../Pages/index";
import { useEffect } from 'react';
import {addItems} from '../actions/index'
import Navbar from "./Navbar";
import Loader from"./Loader";

function App(props){
  //loading state
  const [loading,setLoading] = useState(true)

  //Fetching Data and storing in redux store

  useEffect(()=>{
    fetch('https://iamvikramm.github.io/E-commerce-API/db.json').then(res=>res.json()).then(json=>{
      const apiData = json.items;
      props.store.dispatch(addItems(apiData));
      props.store.subscribe(()=>{
        console.log("Updated")
      })
      setLoading(false);
      }).catch(e=>{
        console.error(e);  
      })
  })

  // if loading showing  loader
  if(loading){
    return(
      <Loader />
    ) 
  }
  
  //All the Pages
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/E-Commerce-App"  element={<Home />}></Route>
      <Route path="/"  element={<AllProducts store={props.store} />}></Route>
      <Route path="/Add-Products" element={<AddProducts store={props.store}/>}></Route>
      <Route path="/Products/:id" element={<Products />}></Route>
      <Route path="/My-Cart" element={<MyCart store={props.store} />}></Route>
      </Routes>
      </BrowserRouter>
    );
  
}

export default App;
