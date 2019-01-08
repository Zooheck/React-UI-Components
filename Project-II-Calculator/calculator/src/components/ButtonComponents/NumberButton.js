import React from 'react';
import './Button.css';



function NumberButton(props) {
    return (
        <div className={props.classNameHandler}>{props.buttonText}</div>
    );
}

export default NumberButton;