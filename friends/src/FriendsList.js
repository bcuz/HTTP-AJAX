import React from 'react';
// import Todo from './Todo';

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => <li>{friend.name}</li>)}
      {/* {props.friends.map(todo => <Todo task={todo} toggleItem={props.toggleItem} />)} */}

    </ul>
  );
};

export default FriendsList;