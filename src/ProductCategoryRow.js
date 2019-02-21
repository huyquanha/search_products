import React, { Component } from 'react';

class ProductCategoryRow extends React.Component {
    render() {
        const products = this.props.products;
        return (
            <tr>
                <th>{this.props.category}</th>
            </tr>
        )
    }
}

export default ProductCategoryRow;