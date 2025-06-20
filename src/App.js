import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hero from './components/hero/hero';
import Navbar from './components/header/navbar';
import Projects from './components/projects/projects';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;