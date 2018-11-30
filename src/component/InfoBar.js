import React, {Component} from "react";
import RestInfo from "./RestInfo";

export default class InfoBar extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            venues: []
        };
    }

    selectedVenues = () => {
        if(this.state.query.trim() !== "") {
            const venues = this.props.venues.filter(venue => venue.name
                .toLowerCase()
                .includes(this.state.query.toLowerCase()))
                return venues;
        }
        return this.props.venues;
    }


    makeChanges = e => {
        this.setState({ query: e.target.value });
        const markers = this.props.venues.map(venue => {
            const theyMatch = venue.name.toLowerCase()
            .includes(e.target.value.toLowerCase());
        const marker = this.props.markers.find(marker => marker.id === venue.id);
        if(theyMatch) {
            marker.isVisible = true;
        } else {
            marker.isVisible = false;
        }
        return marker;
        });
        this.props.updateState({ markers })
    };
    render() {
        return (
            <div className="infoBar" aria-label="infoBar">
                <input type={"search"} id={"search"} placeholder={"Filter Venues"} onChange={this.makeChanges}/>
                <RestInfo 
                    {...this.props}
                    venues={this.selectedVenues()} 
                    detailsHandleClick={this.props.detailsHandleClick}
                />
        
            </div>

        )
    }
}