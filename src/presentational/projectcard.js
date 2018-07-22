import React, { Component } from 'react';
import '../App.css';

class ProjectCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p className="title">
                        { this.props.url.length > 0 ? <a href={this.props.url}>{this.props.name}</a> : this.props.name }
                    </p>
                    <p className="subtitle">
                        { this.props.description }
                    </p>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
