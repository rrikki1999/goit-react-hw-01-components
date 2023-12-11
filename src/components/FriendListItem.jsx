
import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles['friend-item']}>
      <span
        className={styles['friend-avatar']}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }} 
      >
        <img src={avatar} alt={`Avatar of ${name}`} width="50" height="50" />
      </span>
      <p className={styles['friend-name']}>{name}</p>
    </li>
  );
};

export default FriendListItem;
