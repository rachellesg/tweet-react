import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';

class App extends React.Component {
  render() {
    const allTweets = tweets.tweets;
    console.log(allTweets);
    return (
      <div className="container">
        <Tweets hello={allTweets}/>
      </div>
    );
  }
}

class Tweets extends React.Component {
  render () {
    let tweetList = this.props.hello.map(tweet => {
      return <div className="col-12 mb-3 d-flex card"><Tweet profileimage={tweet.user.profile_image_url} username={tweet.user.screen_name} name={tweet.user.name} content={tweet.text.split('<br/>')} date={tweet.created_at} retweetCount={tweet.retweet_count} favCount={tweet.favorite_count}/></div>
    });
    return (
      <div className="row tweets">{tweetList}</div>
    );
  }
}

class Tweet extends React.Component {
  render () {
    // var timestamp = Moment(this.props.date);
    // console.log(timestamp)
    return (
      <div className="content row">
        <div className="profile-image col-3"><img src={this.props.profileimage} /></div>
        <div class="col-9">
          <div className="username">{this.props.name} / {this.props.username}</div> 
          <div className="text">{this.props.content} </div>
          <div className="date">{this.props.date}</div>
          <br />
          Fav: {this.props.favCount} | Retweets: {this.props.retweetCount}
        </div>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
