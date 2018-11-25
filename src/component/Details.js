import React, {Component} from "react";

export default class Details extends Component {
    render() {
        return (
            <li className="details">
                {this.props.name}
            </li>

        )
    }
}