import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
