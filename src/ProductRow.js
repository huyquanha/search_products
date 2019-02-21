import React, { Component } from 'react';
import {ThemeContext} from './theme-context';

class ProductRow extends React.Component {
    static contextType = ThemeContext;
    render() {
        let themeContext = this.context;
        return (
            <tr>
                <td>{this.props.name}</td>
                <td style = {{backgroundColor : themeContext.theme.background}}>{this.props.price}</td>
            </tr>
        );
    }
}

export default ProductRow;