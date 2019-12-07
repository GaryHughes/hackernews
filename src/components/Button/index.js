import React from 'react';
import './index.css'
import PropTypes from 'prop-types';

export const Button = ({
        onClick,
        className,
        children
    }) =>
    <button
        onClick = { onClick }
        className = { className }
        type = "button" > 
            { children } 
    </button>

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node
};

Button.defaultProps = {
    className: ''
};

