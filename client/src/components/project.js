import React, { Component } from 'react'

/***
title: "Andelin Guesthouse",
desc: "Creating an awesome booking experience for a beautiful property located in Devonport, Auckland.",
buttontext: "Take a look",
image: "/media/andelin-guesthouse.png",
slug: "andelin-guesthouse"
***/

export default class Project extends Component {
    
    projectBackground = {
        backgroundImage: `url(${this.props.project.image})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }

    render() {
        return (
            <div className="project" style={ this.projectBackground }>
                <div className="details">
                    <h1>{this.props.project.title}</h1>
                    <p>{this.props.project.desc}</p>
                    <a className="button">{this.props.project.buttontext}</a>
                </div>
            </div>
        )
    }
}
