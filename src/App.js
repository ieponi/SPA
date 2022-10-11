import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Komponentit/Home';
import About from './Komponentit/About';
import ContactUs from './Komponentit/ContactUs';
import NotFound from './Komponentit/NotFound';
import Navbar from './Komponentit/Navbar';
import Header from './Komponentit/Header';
import Footer from './Komponentit/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}


export default App;
