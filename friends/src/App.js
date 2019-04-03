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

  handleFormSend = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>        
        <FriendsList friends={this.state.friends} />
        <form onSubmit={this.handleFormSend}>
          <label>Name</label>
          <input />
          <label>Age</label>
          <input />
          <label>Email</label>
          <input />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;
