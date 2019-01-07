import React, { Fragment } from 'react'
import './Footer.css'
import FooterButton from './FooterButton'


class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            comment: 0,
            retweet: 0,
            favorite: 0,
            message: 0
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    addComment = (event) =>  {
        event.preventDefault
        this.setState(previousState => ({
            comment: previousState.comment++
        }));
        console.log("Add comment click");
    }  
    addRetweet = (event) => {
        event.preventDefault
        this.setState(previousState => ({
            retweet: previousState.retweet++
        }));
    }
    addFavorite = (event) => {
        event.preventDefault
        this.setState(previousState =>
            ({
            favorite: previousState.favorite++
        }));
    }
    addMessage = (event) => {
        event.preventDefault
        this.setState(previousState =>
            ({
            message: previousState.message++
        }));
    }
    render() {  
        return( 
            <div className="footer-content">
                <FooterButton buttonType="comment" buttonText="Comment" onClickHandler={this.addComment} clicks={this.state.comment}/>
                <FooterButton buttonType="retweet" buttonText="Retweet" onClickHandler={this.addRetweet} clicks={this.state.retweet}/>
                <FooterButton buttonType="favorite" buttonText="Favorite" onClickHandler={this.addFavorite} clicks={this.state.favorite}/>
                <FooterButton buttonType="message" buttonText="Message" onClickHandler={this.addMessage} clicks={this.state.message}/>
            </div>
                    
        );
    }
}
export default Footer