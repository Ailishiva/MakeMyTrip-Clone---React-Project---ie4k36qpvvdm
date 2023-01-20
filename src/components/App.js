 import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import React from 'react'
import '../styles/App.css';
import Header from './Header';
const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
    </div>
  )
}




export default App;
