import React from 'react';
import './Card.css';
import ProjectDisplay from './ProjectDisplay.jsx';

function Card({ title, children}) {
  return (
    <div className="card">
        <div className="card-title">{title}</div>

        <div className="card-content">
            {children}
        </div>
    </div>
  );
}

export default Card;