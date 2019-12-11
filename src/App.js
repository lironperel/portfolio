import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img id='my-photo' width='150px' src={require('./images/Me.jpg')} />
      </div>
      <div id='my-title'>
        Full-Stack Developer
      </div>
      <div id='pl-icons'>
        <img className='anim-dur animated zoomInUp delay-1s' width='150px' src={require('./images/HTMLCSSJS.png')} />
        <div className='anim-dur animated zoomInUp delay-2s'>
          <img width='100vw' src={require('./images/react.png')} />
          <p style={{marginTop:'-15px'}}>ReactJS<br /> React-Native</p>
        </div>
        <img className='anim-dur animated zoomInUp delay-3s' width='100vw' src={require('./images/nodejs.png')} />
        <img className='anim-dur animated zoomInUp delay-4s' width='130vw' src={require('./images/ExpressJS.png')} />
      </div>
    </div>
  );
}

export default App;
