import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import WelcomeToCart from './components/welcome';
import Detalles from './components/detalles';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/carro" element={<WelcomeToCart />} />
          <Route path="/product/:productId" element={<Detalles />} />
          <Route path="/start" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
