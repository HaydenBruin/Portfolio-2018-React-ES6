import React, { Component } from 'react'

export default class Project extends Component {
    
    projectBackground = {
        backgroundImage: `url(${this.props.project.image})`
    }

    render() {
        return (
            <div className="project" style={ this.projectBackground }>
                
            </div>
        )
    }
}
