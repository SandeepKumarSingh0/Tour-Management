import React from 'react';
import './subtitle.css'; // Make sure this path is correct

const Subtitle = ({ subtitle }) => {
    return (
        <h3 className="subtitle">
            {subtitle}
        </h3>
    );
}

export default Subtitle;
