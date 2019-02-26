import React from 'react';

export default function ProductCategoryRow(props) {
    const products = props.products;
    return (
        <tr>
            <th>{props.category}</th>
        </tr>
    )
}