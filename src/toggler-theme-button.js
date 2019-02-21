import {ThemeContext} from "./theme-context";
import React from 'react';

export default function TogglerThemeButton(props) {
    return (
        <ThemeContext.Consumer>
            {({theme,toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor : theme.background}}>
                    Click me to change theme!
                </button>
            )}
        </ThemeContext.Consumer>
    );
}