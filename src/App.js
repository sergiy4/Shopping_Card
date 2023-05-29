import React from 'react'
import { useState } from 'react';
import './styles/App.css';
import { Link, HashRouter, BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Home from './components/HomePage';
import Header from './components/HeaderComponent';
import ShopPage from './components/ShopPage';
import PlantPage from './components/PlantPage';
import ShoppingCard from './components/ShoppingCart';



export function App() {


  const [dataPlants ,setDataPlants] = useState([])
  
  const delPlant = (id) =>{
    setDataPlants(prevVal => prevVal.filter(item => item.id !== id))
  }

 
  const increment = (id)=>{
   
    let newA = dataPlants.map((item)=>{
     
      if(item.id===id ){
        
        
        let el ={
          ...item,
          count:item.count+1,
        }
          
        return el
       
      }else{
        return item
      }

    })
    
    setDataPlants(newA)
  }

  const decrement = (id)=>{

    let newArr = dataPlants.map((item)=>{

      if(item.id===id && item.count>1){
        let el ={
          ...item,
          count:item.count-1,
        }
        
        return el
      }else{
        return item
      }

    })

    setDataPlants(newArr)

  }

  const handleChange = (e,id) =>{
    console.log('sdf')
    console.log(e.target.value)
    let newArr = dataPlants.map((item)=>{
     
      if(item.id===id ){
        let el

        if(e.target.value>0){
           el = {
            ...item,
            count: JSON.parse(e.target.value)
          }
        }
        if( e.target.value === ''){
          el = {
            ...item,
            count: 1
          }
        }
        
        
        return el
       
      }else{
        return item
      }

    })

    setDataPlants(newArr)
  }
  return (
    <>
    <Header plants={dataPlants}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop'>
        
        <Route index element={<ShopPage dataPlants={dataPlants} setDataPlants={setDataPlants}/>}/>
        <Route path='/shop/:id' element={<PlantPage setDataPlants={setDataPlants} dataPlants={dataPlants}/>}/>
      </Route> 
      <Route path='/shopping_card' element={<ShoppingCard plants={dataPlants} increment={increment} decrement={decrement} handleChange={handleChange} delPlant={delPlant}/>}/>

    
    </Routes>
    
    </>
  )
}








