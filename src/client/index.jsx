import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
  render() {
    const Tweets = tweets.tweets;
    console.log(Tweets);
    const listOfFruits = [
      "apples",
      "bananas",
      "pineapple"
    ];
    return (
      <div>
        <Fruits fruits={listOfFruits}/>
      </div>
    );
  }
}

class Fruits extends React.Component {
  render () {
    let fruitListItems = this.props.fruits.map(fruit => {
      return <li><Fruit name={fruit} /></li>
    });
    return (
      <div className="tweets">{fruitListItems}</div>
    );
  }
}

class Fruit extends React.Component {
  render () {
    return (
      <div className="username">{this.props.name}</div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
