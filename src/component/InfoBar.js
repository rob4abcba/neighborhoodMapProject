import React, {Component} from "react";
import RestInfo from "./RestInfo";

export default class InfoBar extends Component {
    render() {
        return (
            <div className="infoBar">
                <input type={"search"} id={"search"} placeholder={"Filter Venues"} />
                <RestInfo {...this.props} detailsHandleClick={this.props.detailsHandleClick}/>
        
            </div>

        )
    }
}