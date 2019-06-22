import React, { Component } from 'react'
import './ProjectContainer.css';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import projects from '../../projects.json';

class ProjectContainer extends Component {

    state = {
        projects
    };

    render() {
        return (
            <div className="container scrollspy" id="ProjectBody">
                <style>
                    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
                    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400i&display=swap');
                    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap');
                </style>
                <div>
                    <h1 className="center" id="Projects">Projects</h1>
                    <hr />
                </div>

                {this.state.projects.map(project => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        )
    }

}

export default ProjectContainer
