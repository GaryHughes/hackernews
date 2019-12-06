// @ts-check
import React from 'react';
import './App.css';

function App() {
  const helloWorld = 'Welcome to the Road to learn React';
  const user = { firstName : 'Gary', lastName : 'Hughes' };
  return (
    <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{user.firstName} {user.lastName}</h3>
    </div>
  );
}

export default App;
