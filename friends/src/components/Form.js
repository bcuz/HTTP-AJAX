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
      <form onSubmit={this.handleFormSend}>
        <label>Name</label>
        <input onChange={this.handleInputChange} name="name" />
        <label>Age</label>
        <input onChange={this.handleInputChange} name="age" />
        <label>Email</label>
        <input onChange={this.handleInputChange} name="email" />
        <input type='submit' />
      </form>
    );
  }
};

export default Form;