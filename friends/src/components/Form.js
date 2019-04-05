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

  postFriend = friend => {
    axios
      // not quite sure why we post like this
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {                
        this.props.updateItems(response.data);
      })
      .catch(err => console.log(err));
  };

  putFriend = friend => {
    const id = this.props.match.params.id;

    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {        
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
      this.postFriend(this.state.friend)
      this.setState({
        friend: { name: '', age: '', email: '' }
      });
    }
  }

  handleInputChange = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => {
            
      return {
        friend: {
          ...prevState.friend,
          [ev.target.name]: value,
        }
      }
    });
  };
  render() {
    return (
      <div>
        {this.props.location.pathname.includes('update') ? <h3>Updating Friend #{this.props.match.params.id}</h3> : <h3>Add a new friend</h3>}
        <form onSubmit={this.handleFormSend}>
          <label>Name</label>
          <input required onChange={this.handleInputChange} value={this.state.friend.name} name="name" />
          <label>Age</label>
          <input required onChange={this.handleInputChange} value={this.state.friend.age} name="age" />
          <label>Email</label>
          <input required onChange={this.handleInputChange} value={this.state.friend.email} name="email" />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default Form;