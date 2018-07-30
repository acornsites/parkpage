import React, { Component } from 'react';
import './App.css';
import config from './config/config';
import Contact from './components/contact';
import Later from './components/later';
import Hero from "./components/hero";
import Projects from './components/projects';
import Social from './components/social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {
    return (
        <div>
            <Hero/>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            { config.for_sale ? <Contact/> : <Later/>}
                        </div>
                        <div className="column">
                            <div className="title">
                            <h2>My Other Projects</h2>
                            </div>
                            <Projects/>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <section>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <a href="https://github.com/chpwssn/parkpage"><FontAwesomeIcon icon={faCodeBranch}/> fork me on GitHub</a>
                        </div>
                        <div className="column has-text-centered">
                            <Social/>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
  }
}

export default App;
