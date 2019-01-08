import React from 'react';
import './Button.css';



function NumberButton(props) {
    return (
        <div buttonValue={props.buttonText} onClick={props.onClick} className={props.classNameHandler}>{props.buttonText}</div>
    );
}

export default NumberButton;