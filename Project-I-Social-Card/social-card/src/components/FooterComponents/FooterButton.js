import React from 'react'

function FooterButton(props) {
    return(
        <button className="footer-button" onClick={props.onClickHandler}>{props.buttonText}s {props.clicks}</button>
    );
}
export default FooterButton