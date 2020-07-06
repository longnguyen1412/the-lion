import React from 'react';
import './App.css';

import TopMenu from './components/TopMenu';
import Slogan from './components/Slogan';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import GoogleMap from './components/GoogleMap';
import Section5 from './components/Section5';

function App() {
  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Slogan />
      <AboutUs />
      <Products />
      <Testimonials />
      <GoogleMap />
      <Section5 />
      <footer>
          <p>
              © Bản quyền thuộc về The Lion
          </p>
      </footer>
    </div>
  );
}

export default App;
