import { useState } from 'react';

import './App.css';

function App() {
  //Hoock
  const [count, setCount] = useState(0);

  //HandlerButton

  const handlreButton = function () {
    setCount(prevCounter => {
      if (prevCounter == 10) {
        console.log('You rest count');
        return (prevCounter = 0);
      }
      return (prevCounter = prevCounter + 1);
    });
  };

  return (
    <div>
      <h1>Magict butotn</h1>

      <p>Your magic count start here: {count}</p>
      <button onClick={handlreButton}>Hit me and see de magic</button>
    </div>
  );
}

export default App;
