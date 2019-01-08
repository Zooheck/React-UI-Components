import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div buttonValue={props.buttonText} className="action-button" onClick={props.onClick}>{props.buttonText}</div>
    );
}

export default ActionButton;