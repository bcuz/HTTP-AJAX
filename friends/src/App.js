import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './FriendsList';
import './App.css';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>        
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
