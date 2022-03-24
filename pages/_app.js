import '../styles/globals.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#000000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffee51',
    },
  },
});

function MyApp({ Component, pageProps }) {
  console.log(theme);
  return <>
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    
    </ThemeProvider>
  </>
}

export default MyApp
