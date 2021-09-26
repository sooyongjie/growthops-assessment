import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Services from './components/Services';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome />
    <Nav />
    <Services />
  </React.StrictMode>,
  document.getElementById('root')
);
