import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [isDeleting, setIsDeleting] = useState(false);

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  let warning;

  if (isDeleting) {
    warning = <Modal onClikedButton={proceedHandler}></Modal>;
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      {warning}
      <Button onClikedButton={deleteHandler}></Button>
    </div>
  );
}

export default App;
