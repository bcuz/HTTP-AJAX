import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './FriendsList';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));
  }

  postFriend = friend => {
    axios
      // not quite sure why we post like this
      .post(`http://localhost:5000/friends`, friend)
      // why is the res not being used?
      .then(res => {                
        this.setState(prevState => {
          return { friends: [...prevState.friends, friend]}
        })
      })
      .catch(err => console.log(err));
  };

  handleFormSend = e => {
    e.preventDefault();
    this.postFriend(this.state.friend)
  }

  handleInputChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>        
        <FriendsList friends={this.state.friends} />
        <form onSubmit={this.handleFormSend}>
          <label>Name</label>
          <input onChange={this.handleInputChange} name="name" />
          <label>Age</label>
          <input onChange={this.handleInputChange} name="age" />
          <label>Email</label>
          <input onChange={this.handleInputChange} name="email" />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;
