import React from 'react';
import './card.styles.css';

export const Card = (props) => {
   return (
      <div className='card'>
         <img src={`https://robohash.org/${props.user.id}?set=set2&size=110x110`} alt="user" />
         <p>My name is <b>{props.user.name}</b></p>
         <p>{props.user.email}</p>
      </div>
   )
}
