import React from 'react';
import NavMenu from './containers/NavMenu/NavMenu'
import './App.css';

//Reach Router
import { Router } from '@reach/router'

//Pages

const HomePage = () => {
  return (
    <div>
      <NavMenu />
    </div>
  )
}

function App() {
  return (
    <Router>
      <HomePage path="/" />
    </Router>
  );
}

export default App;
