import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Services from './components/Services';
import Skills from './components/Skills';
import Features from './components/Features';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome />
    <Nav />
    <Services />
    <Skills />
    <Features />
  </React.StrictMode>,
  document.getElementById('root')
);
