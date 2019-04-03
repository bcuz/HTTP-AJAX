import React from 'react';

const Friend = props => {
  // destructuring
  let { name, age } = props.friend

  return <li>{name} is {age}</li>
};

export default Friend;