import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import Form from './components/Form';
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

  render() {
    return (
      <div>        
        <FriendsList friends={this.state.friends} />
        <Form postFriend={this.postFriend} />        
      </div>
    );
  }
}

export default App;
