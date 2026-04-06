import React from "react";
import "./Navbar.css";

function Navbar({ logo, buttons }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">{logo}</div>
            <ul className="navbar-links">
                {buttons.map((button, index) => (
                    <li key={index}>
                        <a href={button.href} className="navbar-button">
                            {button.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;