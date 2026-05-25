import React from "react";
import './AboutMeDisplay.css';

import { ReactComponent as MailIcon } from '../icons/email-svg.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram-svg.svg';
// import { ReactComponent as WhatsappIcon } from '../icons/whatsapp-svg.svg';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin-svg.svg';

function AboutMeDisplay({ profile }) {
    return (
        <div className="about-me-display">
            <div className="about-me-leftSide">
                <div className="about-me-links">
                    {profile.mail && (
                        <a href={profile.mail.href} className="about-me-link-button">
                            <MailIcon className="icon" />
                        </a>
                    )}
                    {profile.instagram && (
                        <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="about-me-link-button">
                            <InstagramIcon className="icon" />
                        </a>
                    )}
                    {profile.cv && (
                        <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="about-me-link-button">
                            CV
                        </a>
                    )}
                    {profile.linkedin && (
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="about-me-link-button">
                            <LinkedInIcon className="icon" />
                        </a>
                    )}
                </div>
                <img src={profile.image} alt="About Me" className="about-me-image" />
            </div>

            <div className="about-me-divider"></div>

            <div className="about-me-rightSide">
                <p className="about-me-text">{profile.text}</p>
            </div>
        </div>
    );
}

export default AboutMeDisplay;