import React, { Component } from 'react';

import './App.css';
import Maps from './component/Maps';
import SquareAPI from "./API/APIindex"

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues:[],
      markers:[],
      center:[],
      zoom: 12

    };
  }

  markCLicker = marker => {
    marker.isOpen = true;
    this.setState({markers:Object.assign(this.state.markers, marker)
    });
  };

  componentDidMount() {
    SquareAPI.search({
      near: "Austin,TX",
      query: "tacos",
      limit: 10
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true
        };
      });
      this.setState({ venues, center, markers});
      console.log(results);
    });
  }
  render() {
    return (
      <div className="App">
      <Maps  {...this.state} markCLicker={this.markCLicker} />
      
      </div>
    );
  }
}

export default App;
