import { createTheme, ThemeProvider } from '@mui/material/styles';

const HAPPYKACY = createTheme({
  palette: {
    black: {
      primary: '#1A0000', // Use the actual color value
    },
    dark: {
      primary: '#7AA3C1',
    },
    mid: {
      primary: '#89C4E1', // Use the actual color value
    },
    light: {
      primary: '#F5EDCE', // Use the actual color value
    },
  },
  typography:
  {
    primary: {
      fontFamily: 'Instrument Serif, serif'
      /*fontFamily: 'PT Sans Narrow, sans-serif'*/
      /*fontFamily: 'Instrument Serif, serif'*/
      /*fontFamily: 'Imbue, serif',*/
    },
    secondary: {
      fontFamily: 'Nunito, sans-serif'
    }
  }
  // other theme customizations
});
export default HAPPYKACY;