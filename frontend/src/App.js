import './App.css';

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <Router>
      <Redirect to='/services'/>
      <ServiceAdd />
      <ServiceList />
    </Router>
  );
}

export default App;
