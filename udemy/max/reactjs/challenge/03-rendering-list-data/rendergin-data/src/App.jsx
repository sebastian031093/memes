import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Todo from './components/Todo';

const DUMMY_TODOS = ['Learn React', 'Practice React', 'Profit!'];

function App() {
  return (
    <div>
      <Todo data={DUMMY_TODOS}></Todo>
    </div>
  );
}

export default App;
