import React from 'react';
import './App.css';
import Counter from './components/counter'
import Increase from './components/increaseCounter'
import Decrease from './components/decreaseCounter'
import IncreaseByTwo from './components/increaseByTwoCounter'
import DecreaseByTwo from './components/decreaseByTwoCounter'

function App() {
  return (
    <div className="App">
      <Counter />
      <Increase />
      <Decrease />
      <IncreaseByTwo />
      <DecreaseByTwo />
    </div>
  );
}

export default App;
