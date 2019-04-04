import React from 'react';
import axios from 'axios';

const Friend = props => {
  // destructuring
  let { name, age, id } = props.friend

  const deleteItem = () => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        props.updateItems(response.data);
      })
      .catch(err => console.log(err));
  };

  return <li>{name} is {age}<button onClick={deleteItem}>X</button></li>
};

export default Friend;