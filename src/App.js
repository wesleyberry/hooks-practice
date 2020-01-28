import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
    </div>
  );
}

export default App;
