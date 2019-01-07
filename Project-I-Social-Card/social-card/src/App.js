import React from 'react';
import './App.css';
import '../src/components/CardComponents/CardContainer';
import '../src/components/HeaderComponents/HeaderContainer';
import HeaderContainer from '../src/components/HeaderComponents/HeaderContainer';
import CardContainer from '../src/components/CardComponents/CardContainer';
import Footer from '../src/components/FooterComponents/Footer'

class App extends React.Component {
  state = {
    comment: 0,
    retweet: 0,
    favorite: 0,
    message: 0
}
addComment = (event) =>  {
  event.preventDefault
  this.setState(previousState => ({
      comment: previousState.comment += 1
  }));
  console.log("Add comment click");
}  
addRetweet = (event) => {
  event.preventDefault
  this.setState(previousState => ({
      retweet: previousState.retweet += 1
  }));
}
addFavorite = (event) => {
  event.preventDefault
  this.setState(previousState =>
      ({
      favorite: previousState.favorite += 1
  }));
}
addMessage = (event) => {
  event.preventDefault
  this.setState(previousState =>
      ({
      message: previousState.message += 1
  }));
}
  render() {
    return (
      <div className="tweet">
        <HeaderContainer />
        <CardContainer />
        <Footer
        comment={this.state.comment}
        retweet={this.state.retweet}
        message={this.state.message}
        favorite={this.state.favorite}
        addComment={this.addComment}
        addRetweet={this.addRetweet}
        addMessage={this.addMessage}
        addFavorite={this.addFavorite}
        />
      </div>
    );
  }
};

export default App;
