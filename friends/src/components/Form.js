import React, { Component } from 'react';

class Form extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }

  handleFormSend = e => {
    e.preventDefault();
    this.props.postFriend(this.state.friend)
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });
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