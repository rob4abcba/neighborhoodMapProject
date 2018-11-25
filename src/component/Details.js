import React, {Component} from "react";

export default class Details extends Component {
    render() {
        return (
            <li className="details" onClick={() => 
            this.props.detailsHandleClick(this.props)}>
                {this.props.name}
            </li>

        )
    }
}