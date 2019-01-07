import React, { Fragment } from 'react'
import './Footer.css'
import FooterButton from './FooterButton'


const Footer = (props) => {
    return( 
        <div className="footer-content">
            <FooterButton buttonType="comment" buttonText="Comment" onClickHandler={props.addComment} clicks={props.comment}/>
            <FooterButton buttonType="retweet" buttonText="Retweet" onClickHandler={props.addRetweet} clicks={props.retweet}/>
            <FooterButton buttonType="favorite" buttonText="Favorite" onClickHandler={props.addFavorite} clicks={props.favorite}/>
            <FooterButton buttonType="message" buttonText="Message" onClickHandler={props.addMessage} clicks={props.message}/>
        </div>
                    
        );
}
export default Footer