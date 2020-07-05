import React from 'react';
import './App.css';

import TopMenu from './components/TopMenu';
import Slogan from './components/Slogan';
import AboutUs from './components/AboutUs';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Slogan />
      <AboutUs />
      <Products />
    </div>
  );
}

export default App;
