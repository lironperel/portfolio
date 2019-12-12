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
        <img className='anim-dur animated zoomInUp delay-1s' width='130px' src={require('./images/HTMLCSSJS.png')} />
        <div className='anim-dur animated zoomInUp delay-2s'>
          <img width='90vw' src={require('./images/react.png')} />
          <p style={{marginTop:'-15px', fontSize: '1rem'}}>ReactJS<br /> React-Native</p>
        </div>
        <img className='anim-dur animated zoomInUp delay-3s' width='80vw' src={require('./images/nodejs.png')} />
        <img className='anim-dur animated zoomInUp delay-4s' width='100vw' src={require('./images/ExpressJS.png')} />
        <img className='anim-dur animated zoomInUp delay-5s' width='100vw' src={require('./images/mongodb.png')} />
      </div>
      <div id='aboutme'>
        
      </div>
    </div>
  );
}

export default App;
