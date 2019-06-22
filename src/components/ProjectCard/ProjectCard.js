import React from 'react'
import './ProjectCard.css';

const ProjectCard = props => {
    return (
        <div className="card center" id="Cards">
            <div className="card-image">
                <div className="card-image">
                    <img className="materialboxed" src={props.image} />
                </div>
                <div className="card-content">
                    <a href={props.link} className="ProjectName" target="_blank">{props.name}</a>
                </div>
            </div>
            
            <style>
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400i&display=swap');
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap');
            </style>
        </div>
    )
}

export default ProjectCard
