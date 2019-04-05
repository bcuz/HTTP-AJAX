import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }

  putFriend = friend => {
    const id = this.props.match.params.id;

    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        console.log(response.data);
        
        this.props.updateItems(response.data);
        this.props.history.push('/')
      })
      .catch(err => console.log(err));

  }

  handleFormSend = e => {
    e.preventDefault();
    if (this.props.location.pathname.includes('update')) {
      this.putFriend(this.state.friend)
    } else {
      this.props.postFriend(this.state.friend)
      this.setState({
        friend: { name: '', age: '', email: '' }
      });
    }
  }

  handleInputChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
        id: this.props.friends[this.props.friends.length-1].id + 1
      }
    });
  };
  render() {
    return (
      <form onSubmit={this.handleFormSend}>
        <label>Name</label>
        <input onChange={this.handleInputChange} value={this.state.friend.name} name="name" />
        <label>Age</label>
        <input onChange={this.handleInputChange} value={this.state.friend.age} name="age" />
        <label>Email</label>
        <input onChange={this.handleInputChange} value={this.state.friend.email} name="email" />
        <input type='submit' />
      </form>
    );
  }
};

export default Form;