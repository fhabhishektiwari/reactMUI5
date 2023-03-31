import React, { createContext, useEffect, useState } from 'react';
import {darkTheme,lightTheme} from '../themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ThemeContext = createContext();

export const ThemeProviderComponent = ({ children }) => {
    const [theme, setTheme] = useState('light');

    console.log({theme})

    useEffect(()=>{
        const storedTheme=localStorage.getItem('theme');
        if(storedTheme){
            setTheme(storedTheme);
        }
    },[]);

    const handleToggle = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggle }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
