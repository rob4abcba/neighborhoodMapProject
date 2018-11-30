import React, {Component} from "react";
import Details from "./Details";

export default class RestInfo extends Component {
    render() {
        return (
            <ol  className="restInfo" aria-label="restInfo">
                {this.props.venues && 
                this.props.venues.map((venue, idx) => ( 
                    <Details key={idx} {...venue} 
                    detailsHandleClick={this.props.detailsHandleClick}/>
                ))}
            
            </ol>

        )
    }
}