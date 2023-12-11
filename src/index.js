import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import HAPPYKACY from './theme.js'; // Import the theme you created

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={HAPPYKACY}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);