import { useState } from 'react';

const Button = function (props) {
  return <button onClick={props.onClikedButton}>Delete</button>;
};

export default Button;
