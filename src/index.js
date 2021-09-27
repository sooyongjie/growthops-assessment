import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Services from './components/Services';
import Skills from './components/Skills';
import Features from './components/Features';
import Clients from './components/Clients';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Form from './components/Form';
import Reviews from './components/Reviews';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome />
    <Nav />
    <Services />
    <Skills />
    <Features />
    <Contacts />
    <Form />
    <Reviews />
    <Clients />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
