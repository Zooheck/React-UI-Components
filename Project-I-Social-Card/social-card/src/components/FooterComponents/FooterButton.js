import React from 'react'

function FooterButton(props) {
    return(
        <button onClick={props.onClickHandler}>{props.buttonText} {props.clicks}</button>
    );
}
export default FooterButton