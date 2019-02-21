import React from 'react';

export const themes = {
    light: {
        foreground : '#123456',
        background : '#999999',
    },
    dark: {
        foreground : '#000000',
        background : '#567811',
    }
};

export const ThemeContext = React.createContext({
    theme : themes.dark,
    toggleTheme : ()=>{},
}); //this is default value