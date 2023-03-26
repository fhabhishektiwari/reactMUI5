import React, { createContext, useEffect, useState } from 'react';
import {darkTheme,lightTheme} from '../theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ThemeContext = createContext();

export const ThemeProviderComponent = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        const storedTheme=localStorage.getItem('theme');
        if(storedTheme){
            setTheme(storedTheme);
        }
    },[]);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <ThemeContext.Provider value={{theme,toggleTheme }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
