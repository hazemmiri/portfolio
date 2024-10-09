import React from 'react';
import './App.css';
import About from './Components/About Section/About';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home Section/Home';
import Skills from './Components/Skills Section/Skills';
import Project from './Components/Project Secton/Project';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact Section/Contact';

function App() {
  return (
    <div >

      <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
       

   </>
    </div>
  );
}

export default App;
