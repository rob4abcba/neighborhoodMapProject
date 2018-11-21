import React, { Component } from 'react';

import './App.css';
import Maps from './component/Maps';
import SquareAPI from "./API/APIindex"

class App extends Component {
  componentDidMount() {
    SquareAPI.search({
      near: "Austin,TX",
      query: "tacos",
      limit: 10
    }).then(results => console.log(results));
  }
  render() {
    return (
      <div className="App">
      <Maps/>
      
      </div>
    );
  }
}

export default App;
