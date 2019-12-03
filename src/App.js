import React from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = 'Heyyo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is {welcome}</p>
        <AppTwo/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}


function AppTwo() {
  return (
      <h1>I am saying {welcome}</h1>
  )
}

export default App;
