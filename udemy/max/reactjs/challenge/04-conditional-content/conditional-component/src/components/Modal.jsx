import { useState } from 'react';
import Message from './Message';
import './Modal.css';

export default function Modal(props) {
  return (
    <div>
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <Message></Message>
        <button onClick={props.onClikedButton}>Proceed</button>
      </div>
    </div>
  );
}
