import React, { Fragment, Component } from 'react';
import Header from './components/header';
import Projects from './components/projects';

class App extends Component {
    state = {
        title: "Hayden Bruin",
        details: {
            email: "bruinhayden@gmail.com",
            phone: "022 313 4925"
        },
        projects: [
            {
                title: "Future Blossom",
                desc: "A bespoke web application built to improve gay dating in London",
                buttontext: "Take a look",
                image: "/media/future-blossom.png",
                slug: "future-blossom"
            },{
                title: "Andelin Guesthouse",
                desc: "Creating an awesome booking experience for a beautiful property located in Devonport, Auckland.",
                buttontext: "Take a look",
                image: "/media/andelin-guesthouse.png",
                slug: "andelin-guesthouse"
            },{
                title: "Rocket SEO - Marketing Template",
                desc: "A rocket themed marketing landing page - because why not?",
                buttontext: "Take a look",
                image: "/media/rocket-landing.png",
                slug: "rocket-landing"
            }      
        ]
    }

    render() {
        return (
            <Fragment>
                <Header title={this.state.title} details={this.state.details} />

                <Projects projects={this.state.projects} />
            </Fragment>
        );
    }
}

export default App;