import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import About from './modules/About';
import Rooms from './modules/Rooms';
import Menu from './modules/Menu';
import { PizzasMenu } from './components/PizzasMenu';
import NotFound from './modules/NotFound';
import LegalesNotices from './components/LegalesNotices';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router basename="/La-Maison-du-Bon">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/pizzas" element={<PizzasMenu />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/LegalesNotices" element={<LegalesNotices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
