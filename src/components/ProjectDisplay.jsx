import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import { ReactComponent as GitIcon } from '../icons/git-icon-svg.svg';
import { ReactComponent as ItchIcon } from '../icons/itch-io-svg.svg';
import { ReactComponent as InfoIcon } from '../icons/info-icon-svg.svg';
import "./ProjectDisplay.css";

function ProjectDisplay({ projects }) {
    return (
        <div className="project-display">
            {projects.map((project, index) => (
                <div key={index} className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                    <h3>{project.title}</h3>
                    <div className="project-content">
                        <div className="project-content-leftSide">
                            {/* link icons display */}
                            <div className="project-links">
                                {project.git && (
                                    <a href={project.git} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                        <GitIcon className="icon" />
                                    </a>
                                )}
                                {project.itch && (
                                    <a href={project.itch} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                        <ItchIcon className="icon" />
                                    </a>
                                )}
                                {project.info && (
                                    <a href={project.info} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                        <InfoIcon className="icon" />
                                    </a>
                                )}
                            </div>
                            {/* TODO: Add option for video and switching images */}
                            {/* <img src={project.image} alt={project.title} className="project-image" /> */}
                            <ProjectCarousel
                                media={project.media}
                                alt={project.title}
                                thumbsSide={index % 2 === 1 ? "left" : "right"}
                            />
                        </div>

                        <div className="project-content-divider"></div>

                        <div className="project-content-rightSide">
                            <div className="project-description">
                                <h4>Project Description</h4>
                                <p>{project.description}</p>
                            </div>

                            <h4>Technologies</h4>
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="project-technology">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectDisplay;