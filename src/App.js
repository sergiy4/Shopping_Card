import React from 'react'

import './styles/App.css';
import { Link, HashRouter, BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Home from './components/HomePage';
import Header from './components/HeaderComponent';
import ShopPage from './components/ShopPage';
// const About = () => <div>You are on the about page</div>
// const Home = () => <div>You are home</div>
// const NoMatch = () => <div>No match</div>

// export const LocationDisplay = () => {
//   const location = useLocation()

//   return <div data-testid="location-display">{location.pathname}</div>
// }


export function App() {
  return (
    <>
    <Header/>
      <ShopPage/>
    </>
  )
  
};








