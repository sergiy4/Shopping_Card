import React from 'react'
import { useState } from 'react';
import './styles/App.css';
import { Link, HashRouter, BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Home from './components/HomePage';
import Header from './components/HeaderComponent';
import ShopPage from './components/ShopPage';
import FlowerPage from './components/FlowerPage';
import ShoppingCard from './components/ShoppingCart';



export function App() {


  const [dataPlants ,setDataPlants] = useState([])
 


  return (
    <>
    <Header/>
    <ShopPage dataPlants={dataPlants} setDataPlants={setDataPlants} />
    <ShoppingCard plants={dataPlants}/>
    </>
  )
  
};








