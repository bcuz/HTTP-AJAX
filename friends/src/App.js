import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter,  Route } from "react-router-dom";
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

  updateItems = newFriends => {
    this.setState({ friends: newFriends });
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => <FriendsList friends={this.state.friends} updateItems={this.updateItems} /> } />          
        <Route exact path="/" render={props => <Form {...props} updateItems={this.updateItems} /> } />          
        <Route path="/update/:id" render={props => <Form {...props} updateItems={this.updateItems} /> } />          
      </BrowserRouter>
    );
  }
}

export default App;
