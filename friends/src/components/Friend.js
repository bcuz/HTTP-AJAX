import React from 'react';
import { Link} from "react-router-dom";
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

  return (
    <li>
      <button onClick={deleteItem}>X</button>
      <Link to={`/update/${id}`}>Update</Link>
      {name} is {age}
    </li>
  )
};

export default Friend;