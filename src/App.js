import React, { Component } from 'react';
import './App.css';
import config from './config/config';
import Contact from './components/contact';
import Later from './components/later';
import Hero from "./components/hero";
import Projects from './components/projects';
import Social from './components/social';


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
                        <div className="column">
                            <i className="fa fa-icon-fork"></i>
                        </div>
                        <div className="column">
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
