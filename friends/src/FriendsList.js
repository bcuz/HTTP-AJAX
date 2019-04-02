import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => <Friend friend={friend} />)}
    </ul>
  );
};

export default FriendsList;