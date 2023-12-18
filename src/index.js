import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import HAPPYKACY from './theme.js'; // Import the theme you created
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={HAPPYKACY}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);