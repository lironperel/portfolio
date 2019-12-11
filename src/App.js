import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id='my-photo' width='150px' src={require('./images/Me.jpg')} />
    </div>
  );
}

export default App;
