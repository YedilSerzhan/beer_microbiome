import ResponsiveAppBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About"
import Workflows from "./pages/Workflows"
import Study from "./pages/Study";
import Footer from './components/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <BrowserRouter>
      <div className='my-content'>
        <ResponsiveAppBar sx={{ mb: 3 }} />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="workflows" element={<Workflows />} />
            <Route path="study/:study_id" element={<Study />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
