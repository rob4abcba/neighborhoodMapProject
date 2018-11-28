import React, {Component} from "react";
import RestInfo from "./RestInfo";

export default class InfoBar extends Component {
    constructor() {
        super();
        this.state = {
            query: ""
        };
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
            <div className="infoBar">
                <input type={"search"} id={"search"} placeholder={"Filter Venues"} onChange={this.makeChanges}/>
                <RestInfo {...this.props} detailsHandleClick={this.props.detailsHandleClick}/>
        
            </div>

        )
    }
}