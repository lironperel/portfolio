import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


function App() {
  AOS.init();
  return (
    <div className="App">
      <div>
        <img alt='MyPhoto' id='my-photo' width='150px' src={require('./images/Me.jpg')} />
      </div>
      <div id='my-title'>
        Full-Stack Developer
      </div>
      <div id='Appcontent'>
        <div id='pl-icons'>
          <img alt='HtmlCssJs' className='anim-dur animated zoomInUp delay-1s' width='130px' src={require('./images/HTMLCSSJS.png')} />
          <div className='anim-dur animated zoomInUp delay-2s'>
            <img alt='React' width='90vw' src={require('./images/react.png')} />
            <p style={{marginTop:'-15px', fontSize: '1rem'}}>ReactJS<br /> React-Native</p>
          </div>
          <img alt='NodeJS' className='anim-dur animated zoomInUp delay-3s' width='80vw' src={require('./images/nodejs.png')} />
          <img alt='Express.js' className='anim-dur animated zoomInUp delay-4s' width='100vw' src={require('./images/ExpressJS.png')} />
          <img alt='MongoDB' className='anim-dur animated zoomInUp delay-5s' width='100vw' src={require('./images/mongodb.png')} />
        </div>
        <div id='aboutme'>
          <div data-aos='fade-in' data-aos-offset='100'>
            <p id='aboutme-title'>About Me<br /></p> 
          <div>
          Hi, I'm Liron Perel.<br />
          B.Sc. Software Engineer from Ashdod, Israel.<br />
          </div>
          <br />
          <div id='my-skills'>
            <div class='skill' id='teamwork'>
              <img alt='fastlearner' src={require('./images/fastlearner.ico')} />
              <p>Fast-Learner<br /></p>
            </div>
            <div class='skill' id='teamwork'>
              <img alt='fastlearner' src={require('./images/team.png')} />
              <p>Team Player<br /></p>
            </div>
            <div class='skill' id='teamwork'>
              <img alt='fastlearner' src={require('./images/fastlearner.ico')} />
              <p>Fast-Learner<br /></p>
            </div><div class='skill' id='teamwork'>
              <img alt='fastlearner' src={require('./images/fastlearner.ico')} />
              <p>Fast-Learner<br /></p>
            </div>
            <div class='skill' id='teamwork'>
              <img alt='fastlearner' src={require('./images/fastlearner.ico')} />
              <p>Fast-Learner<br /></p>
            </div>
          </div>
          </div>
        </div>
        <div id='my-works'>
            My Works<br />
            Hi, I'm Liron Perel.<br />
          B.Sc. Software Engineer from Ashdod, Israel.<br />
        </div>

      </div>
      
    </div>
  );
}

export default App;
