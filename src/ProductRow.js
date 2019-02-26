import React from 'react';
import {ThemeContext} from './theme-context';

export default function ProductRow(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <tr>
                    <td>{props.name}</td>
                    <td style = {{backgroundColor : theme.background}}>{props.price}</td>
                </tr>
            )}
        </ThemeContext.Consumer>
    )
}