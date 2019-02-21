import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import {themes, ThemeContext} from "./theme-context";
import TogglerThemeButton from "./toggler-theme-button";

const products=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
    {category: "Music", price: "$0.99", stocked: true, name: "Noi nay co anh"},
    {category: "Music", price: "$0.99", stocked: false, name: "Thang dien"},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
        this.setState(state => ({
          theme: state.theme===themes.dark ? themes.light : themes.dark,
        }));
    };
    this.state={
        theme: themes.light,
        toggleTheme : this.toggleTheme
    }
  }

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
            <FilterableProductTable products={products}/>
            <TogglerThemeButton />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
