import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
  render() {
    const allTweets = tweets.tweets;
    console.log(allTweets);
    return (
      <div>
        <Tweets hello={allTweets}/>
      </div>
    );
  }
}

class Tweets extends React.Component {
  render () {
    let tweetList = this.props.hello.map(tweet => {
      return <li>++ <Tweet name={tweet.text} content={tweet.content} date={tweet.created_at} /></li>
    });
    return (
      <div className="tweets">{tweetList}</div>
    );
  }
}

class Tweet extends React.Component {
  render () {
    return (
      <div className="username">{this.props.name} {this.props.content} {this.props.date}</div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
