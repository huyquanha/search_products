import React, { Component } from 'react';
import {ThemeContext} from './theme-context';

class SearchBar extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleTextInputChange(e) {
        this.props.onTextInputChange(e.target.value);
    }

    handleCheckboxChange(e) {
        this.props.onCheckboxChange(e.target.checked);
    }

    render() {
        const { innerRef, ...rest } = this.props;
        let themeContext = this.context;
        return (
            <React.Fragment>
                <input name="searchText"
                       type="text"
                       placeholder="Search..."
                       onChange={this.handleTextInputChange}
                       style = {{backgroundColor : themeContext.theme.background}}/>
                <br/>
                <input name="inStock"
                       type="checkbox"
                       defaultChecked={false}
                       onChange = {this.handleCheckboxChange}/>
                <label>Only show products in stock</label>
            </React.Fragment>
        )
    }
}

//export default SearchBar;
const ExportSearchBar = React.forwardRef((props,ref) => (
    <SearchBar {...props} innerRef={ref}/>
));

export default ExportSearchBar;