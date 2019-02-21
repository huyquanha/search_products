import React, {Component, Suspense} from 'react';
import SearchBar from './SearchBar';
import ErrorBoundary from './error-boundary';
//import ControlRefButton from './control-ref-button';

const ProductTable = React.lazy(()=>import('./ProductTable'));

class FilterableProductTable extends Component {
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
                {/*<ControlRefButton ref={this.ref}/>*/}
            </div>
        )
    }
}

export default FilterableProductTable;