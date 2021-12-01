import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

// const AuthButtons =()=> {

//     return (
//         // <div className="auth-buttons">
//         //     <Button id="login-button" href='/login' size="large">Sign In</Button>
//         //     <Button id="signup-button" href='/signup' variant="contained" size="large">Get Started</Button>
//         // </div>
//         <ThemeProvider theme={theme}>
//         <Button>Primary</Button>
//         <Button color="secondary">Secondary</Button>
//       </ThemeProvider>
//     );
// }

// export default AuthButtons;

export default function AuthButtons() {
    return (
      <ThemeProvider theme={theme}>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
      </ThemeProvider>
    );
  }