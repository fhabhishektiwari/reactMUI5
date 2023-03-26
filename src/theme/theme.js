import { createTheme } from '@mui/material/styles';
// Define common typography settings for both themes
const commonTypography = {
    fontFamily: 'Roboto',
    h1: {
        fontSize: '1rem',
        fontWeight: 800,
        lineHeight: 1.5,
        letterSpacing: '-0.05rem',
    },
    body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.00938rem',
    },
    myNewVariant:{
        fontSize:'1rem',
        fontWeight:900,
        lineHeight:1.5,
        letterSpacing:'0.05rem',
    }
};

// Define custom light theme
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        white:{
            main:'#FFF',
        },
    },
    typography: commonTypography,
    spacing:4,
});

// Define custom dark theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#ff4081',
        }, 
        black: {
            main: '#000',
        }
    },
    typography: commonTypography,
    spacing: 4,
});

export {lightTheme, darkTheme };
