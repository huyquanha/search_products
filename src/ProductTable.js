import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
    render() {
        let products = this.props.products;
        const searchText = this.props.searchText;
        const inStock = this.props.inStock;

        let rows = [];
        let lastCategory=null;
        for (let product of products) {
            if (product.name.includes(searchText) && (!inStock || (inStock && product.stocked===inStock))) {
                if (product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow
                        key={product.category}
                        category={product.category}/>);
                    lastCategory=product.category;
                }
                rows.push(<ProductRow key={product.name}
                            name={product.name}
                            price={product.price}/>);
            }
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;