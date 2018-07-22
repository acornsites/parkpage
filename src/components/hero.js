import React, { Component } from 'react';
import '../App.css';
import config from '../config';

class Hero extends Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            { config.domain } is owned
                        </h1>
                        <h2 className="subtitle">
                            It is {config.in_use ? 'in use and ': ''}{ config.for_sale ? 'for sale' : 'not for sale' }.
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
