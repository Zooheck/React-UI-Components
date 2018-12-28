import React from 'react';
import './Button.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function NumberButton(props) {
    return (
        <div className={props.buttonStyle}>{props.text}</div>
    );
}

export default NumberButton;