import React, { Component } from 'react';
import Project from './project';

export default class Projects extends Component {

    sliderSettings = {
        interval: 4000
    }

    componentDidMount() {

        // LOOP ALL SLIDES AND ATTACH EVENTS
        var slides = document.getElementsByClassName("project");
        var active = null;
        if(slides > 0)
        {
            // SET DEFAULT EVENTS


            // SET uP AUTOMATIC ROTATION
            if(this.sliderSettings.interval !== 0)
            {
                this.projectSliderTimer = setInterval(function() {
                    
                }, this.sliderSettings.interval);
            }
        }
    }

    render() {
        return (
            <div className="section projects">
                {
                    this.props.projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })
                }
            </div>
        )
    }
}
