import React from 'react';
import './App.css';
import A from './A'
import B from './B'
import Moviescontext from './Moviescontext';
function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Moviescontext>
      <A/>
      <B/>
      </Moviescontext>
    </div>
  );
}

export default App;
