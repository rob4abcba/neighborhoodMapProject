import React, { Component } from 'react';

import './App.css';
import Maps from './component/Maps';
import SquareAPI from "./API/APIindex"
import InfoBar from './component/InfoBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues:[],
      markers:[],
      center:[],
      zoom: 12,
      updateState: obj => {
        this.setState(obj);
      }

    };
  }

  markCLicker = marker => {
    this.closeinfoWindows();
    marker.isOpen = true;
    this.setState({markers:Object.assign(this.state.markers, marker)
    });
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    SquareAPI.getVenuesDetails(marker.id)
    .then(res => {
      const newSpot = Object.assign(venue, res.response.venue);
      this.setState({venues: Object.assign(this.state.venues, newSpot)});
      console.log(newSpot);
    });
  }

  detailsHandleClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.markCLicker(marker);
    console.log(venue);
  }

  closeinfoWindows = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen =false;
      return marker;
    })
    this.setState({markers: Object.assign(this.state.markers, markers)});
  }

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
          isVisible: true,
          id: venue.id
          
        };
      });
      this.setState({ venues, center, markers});
      console.log(results);
    });
  }
  render() {
    return (
      <div className="App">
      <InfoBar {...this.state} detailsHandleClick={this.detailsHandleClick}/>
      <Maps  {...this.state} markCLicker={this.markCLicker} />
      
      </div>
    );
  }
}

export default App;
