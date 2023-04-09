import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Box sx={{ bgcolor: "#F7F7F7", pb: '60px' }}>
    <CssBaseline />
    <App />
  </Box>
);

