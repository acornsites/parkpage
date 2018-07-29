import React, { Component } from 'react';
import '../App.css';
import projects from '../config/projects';
import ProjectCard from "../presentational/projectcard";

class Projects extends Component {
    render() {
        return (
            <div className="projects">

                { projects.map(project =>
                        <ProjectCard
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        />
                ) }

            </div>
        );
    }
}

export default Projects;
