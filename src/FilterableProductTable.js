import React, {Component, Suspense, useState} from 'react';
import SearchBar from './SearchBar';
import ErrorBoundary from './error-boundary';

const ProductTable = React.lazy(()=>import('./ProductTable'));

/*class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText: '',
            inStock: false,
        }
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.ref = React.createRef();
    }

    handleTextInputChange(value) {
        this.setState({
            searchText: value
        })
    }

    handleCheckboxChange(value) {
        if (value) {
            this.ref.current.style.backgroundColor='red';
        }
        else {
            this.ref.current.style.backgroundColor='blue';
        }
        this.setState({
            inStock:value
        });
    }

    render() {
        return (
            <div className="filterableProductTable">
                <SearchBar
                    onTextInputChange={this.handleTextInputChange}
                    onCheckboxChange={this.handleCheckboxChange}
                    ref = {this.ref}/>
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProductTable products={this.props.products}
                                      searchText={this.state.searchText}
                                      inStock = {this.state.inStock}/>
                    </Suspense>
                </ErrorBoundary>
            </div>
        )
    }
}*/

function FilterableProductTable(props) {
    const [searchText, setSearchText] = useState('');
    const [inStock, setInStock] = useState(false);
    const ref = React.createRef();

    function handleTextInputChange(value) {
        setSearchText(value);
    }

    function handleCheckboxChange(value) {
        if (value) {
            ref.current.style.backgroundColor='red';
        }
        else {
            ref.current.style.backgroundColor='blue';
        }
        setInStock(value);
    }

    return (
        <div className="filterableProductTable">
            <SearchBar
                onTextInputChange={handleTextInputChange}
                onCheckboxChange={handleCheckboxChange}
                ref = {ref}/>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductTable products={props.products}
                                  searchText={searchText}
                                  inStock = {inStock}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default FilterableProductTable;