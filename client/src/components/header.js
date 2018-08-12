import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="column">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="column">
                    <ul>
                        <li><label>Email:</label> {this.props.details.email}</li>
                        <li><label>Phone:</label> {this.props.details.phone}</li>
                    </ul>
                </div>
            </header>
        )
    }
}
