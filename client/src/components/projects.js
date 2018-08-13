import React, { Component } from 'react';
import Project from './project';

export default class Projects extends Component {

    sliderSettings = {
        interval: 6000
    }

    componentDidMount() {
        // LOOP ALL SLIDES AND ATTACH EVENTS
        var slides = document.getElementsByClassName("project");
        var active = 0;
        if(slides.length > 0)
        {
            // SET DEFAULT EVENTS
            slides[0].classList.add('active');

            // SET uP AUTOMATIC ROTATION
            if(this.sliderSettings.interval !== 0)
            {
                this.projectSliderTimer = setInterval(function() {
                    // REMOVE OLD SLIDE
                    slides[active].classList.remove('active');

                    // ROTATE TO NEXT SLIDE
                    active++;
                    if(active >= slides.length) active = 0;

                    // MOVE TO NEXT SLIDE
                    slides[active].classList.add('active');

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
