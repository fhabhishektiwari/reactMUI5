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
    myNewVariant: {
        fontSize: '1rem',
        fontWeight: 900,
        lineHeight: 1.5,
        letterSpacing: '0.05rem',
    }
};

// Define custom light theme
const lightTheme = createTheme({
    palette: {
        mode: "light",
        base: {
            main: 'transparent',
        },
        onSurface: {
            main: 'transparent',
        },
        onSurface2: {
            main: 'transparent',
        },
        onColorSurfaceText: {
            main: 'transparent',
        },
        white: {
            main: '#FFFFFF',
            // light: '#F5F6FE',
            // dark: '#EBEBEB'
        },
        lightBgBlue: {
            main: '#F5F6FE',
        },
        black: {
            main: '#000000',
            light: '#5E5E5E',
            dark: '#333333'
        },
        grey: {
            main: '#5E5E5E',
            light: '#C6C6C6'
        },
        blue: {
            main: '#5B6AF1',
            light: '#ACB3F1',
            dark: '#161E6A',
        },
        green: {
            main: '#5BF1D2',
            light: '#ACF1E3',
            dark: '#166A59'
        },
        yellow: {
            main: '#F1C65B',
            light: '#F1DAAC',
            dark: '#6A5216'
        },
        red: {
            main: '#F15B65',
            light: '#F1ACB0',
            dark: '#6A161B'
        },
        linearGradient: {
            main: 'linear-gradient(180deg, #0D1773 1.04%, #0D735E 100%)',
        },
        graph01: {
            main: '#D86445',
            // mainRgb: 'rgba(216, 73, 69, 0.5)',
        },
        graph02: {
            main: '#D89E45',
            // mainRgb: 'rgba(216, 100, 69, 0.5)',
        },
        graph03: {
            main: '#D8CF45',
            // mainRgb: 'rgba(216, 158, 69, 0.5)',
        },
        graph04: {
            main: '#45D853',
            // mainRgb: 'rgba(216, 207, 69, 0.5)',
        },
        graph05: {
            main: '#45D8D7',
            // mainRgb: 'rgba(69, 216, 83, 0.5)',
        },
        graph06: {
            main: '#458FD8',
            // mainRgb: 'rgba(69, 216, 215, 0.5)',
        },
        graph07: {
            main: '#8B45D8',
            // mainRgb: 'rgb(69, 143, 216, 0.5)',
        },
        graph08: {
            main: '#D8459C',
            // mainRgb: 'rgba(139, 69, 216, 0.5)',
        },
        graph09: {
            main: '#D84945;',
            // mainRgb:'rgba(139, 69, 216, 0.5)'
        },
        borderColor: {
            main: '#c6c6c6'
        },
        chartFont: {
            main: "#000000"
        },
        gridColor: {
            main: "rgba(0, 0, 0, 0.5)",
        }
    },
    typography: commonTypography,
    // spacing:4,
    shadows: 'none',
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '8px 16px',
                    textTransform: 'capitalize',
                },
                sizeMedium: {
                    fontSize: '1rem',
                },
                sizeSmall: {
                    fontSize: '0.875rem'
                },
                sizeLarge: {
                    fontSize: '1.125rem',

                },
                contained: {
                    backgroundColor: '#161E6A',
                    color: '#FFF',
                    '&:hover': {
                        backgroundColor: '#000'
                    },
                    '&:active': {
                        // border: '1px solid #ACF1E3'
                        outline: '1px solid #ACF1E3'

                    }
                },
                text: {
                    color: '#161E6A',
                    '&:hover': {
                        color: '#000'
                    },
                    '&:active': {
                        outline: '1px solid #ACF1E3'
                    }
                },
                outlined: {
                    color: '#161E6A',
                    borderColor: '#161E6A',
                    '&:hover': {
                        color: '#000',
                        border: '1px solid #000',
                    },
                    '&:active': {
                        // border: '1px solid #ACF1E3',
                        outline: '1px solid #ACF1E3',
                    }
                }
            }
        },//end MuiButton
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            width:'100%',
                            borderColor: 'green',
                        },
                        '&:hover fieldset': {
                            borderColor: '#00f',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'purple',
                        },
                    }
                },
            }
        },//end MuiTextField
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'red',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'blue',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'purple',
                    },
                },
            },
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    border:'2px solid red',
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    // background:'red',
                    borderColor:'red',
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    }
});

// Define custom dark theme
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        base: {
            main: '#1A1B24',
        },
        onSurface: {
            main: '#2C2D36',
        },
        onSurface2: {
            main: '#31323A',
        },
        onColorSurfaceText: {
            main: '#121212',
        },
        white: {
            main: '#FFFFFF',
            dark: '#E8E8E9',
        },
        grey: {
            main: '#D1D1D3',
            light: '#A3A4A7',
        },
        blue: {
            main: '#9DA6F7',
            light: '#CED2F3',
            dark: '#7378A6',
        },
        green: {
            main: '#9CF7E4',
            light: '#CEF3EC',
            dark: '#73A69B',
        },
        yellow: {
            main: '#F7DC9D',
            light: '#F3E8CE',
            dark: '#A69773'
        },
        red: {
            main: '#F79DA3',
            light: '#F3CED0',
            dark: '#A67376',
        },
        linearGradient: {
            main: 'linear-gradient(180deg, #CED1F3 1.04%, #CEF3EC 100%)',
        },
        graph01: {
            main: '#E8A28F',
            // mainRgb: 'rgba(216, 73, 69, 0.5)',
        },
        graph02: {
            main: '#E8C58F',
            // mainRgb: 'rgba(216, 100, 69, 0.5)',
        },
        graph03: {
            main: '#E8E28F',
            // mainRgb: 'rgba(216, 158, 69, 0.5)',
        },
        graph04: {
            main: '#8FE898',
            mainRgb: 'rgba(216, 207, 69, 0.5)',
        },
        graph05: {
            main: '#8FE8E7',
            mainRgb: 'rgba(69, 216, 83, 0.5)',
        },
        graph06: {
            main: '#8FBCE8',
            mainRgb: 'rgba(69, 216, 215, 0.5)',
        },
        graph07: {
            main: '#B98FE8',
            mainRgb: 'rgb(69, 143, 216, 0.5)',
        },
        graph08: {
            main: '#E88FC4',
            mainRgb: 'rgba(139, 69, 216, 0.5)',
        },
        graph09: {
            main: '#E8928F;',
            mainRgb: 'rgba(139, 69, 216, 0.5)'
        },
        borderColor: {
            main: '#c6c6c6'
        },
        chartFont: {
            main: "#FFFFFF"
        },
        gridColor: {
            main: "#D1D1D3"
        }
    },
    typography: commonTypography,
    // spacing: 4,
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '8px 16px',
                    textTransform: 'capitalize',
                },
                sizeMedium: {
                    fontSize: '1rem',
                },
                sizeSmall: {
                    fontSize: '0.875rem'
                },
                sizeLarge: {
                    fontSize: '1.125rem',

                },
                contained: {
                    backgroundColor: '#7378A6',
                    color: '#000',
                    '&:hover': {
                        backgroundColor: '#9DA6F7'
                    },
                    '&:active': {
                        border: 1,
                        borderColor: '#f00',
                    }
                },
                text: {
                    color: '#7378A6',
                },
                outlined: {
                    color: '#7378A6',
                    borderColor: '#7378A6',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                       '& fieldset':{
                            borderColor: 'green',
                       },
                        '&:hover fieldset': {
                            borderColor: '#00f',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'purple',
                        },
                    }
                },
            }
        },//end MuiTextField
    }
});

export { lightTheme, darkTheme };
