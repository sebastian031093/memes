import { useState } from 'react';

import './App.css';

function App() {
  //Hooks
  const [acctualMessge, setAcctualMessage] = useState('Invalid message');

  //Handlers

  const handlerInputMessage = event => {
    event.preventDefault();
    // console.log(event.target.value);

    let flagString = event.target.value;

    if (flagString.length + 1 > 3) {
      console.log('Good inout');

      setAcctualMessage('Good inout');
    }

    if (flagString.length + 1 < 3) {
      console.log('Bad inout');

      setAcctualMessage('Bad inout');
    }
  };

  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={handlerInputMessage} />
      <p>{acctualMessge}</p>
    </form>
  );
}

export default App;
