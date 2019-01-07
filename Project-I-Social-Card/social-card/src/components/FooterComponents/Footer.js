import React, { Fragment } from 'react'
import './Footer.css'
import FooterButton from './FooterButton'

function Footer() {
    return(
        <div className="footer-content">
            <FooterButton buttonText="Comment"/>
            <FooterButton buttonText="Retweet"/>
            <FooterButton buttonText="Favorite"/>
            <FooterButton buttonText="Message"/>
        </div>
                
    );
}

export default Footer