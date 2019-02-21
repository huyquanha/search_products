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
        let themeContext = this.context;
        return (
            <React.Fragment>
                <input name="searchText"
                       type="text"
                       ref={this.props.forwardedRef}
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

const ExportSearchBar = React.forwardRef((props,ref) => (
    <SearchBar {...props} forwardedRef={ref}/>
));

export default ExportSearchBar;