import React from 'react';
import NavMenu from './containers/NavMenu/NavMenu'
import './App.css';

//Reach Router
import { Router } from '@reach/router'

//Pages

const HomePage = () => {
  return (
    <div className="content">
      <NavMenu />

      <div className="content-section welcome">
        <div className="header">
          <img src="https://files.slack.com/files-pri/TCX5TJ8DD-F0124RKC5Q9/nourish___lift-5.png" alt="cool" />
        </div>
      </div>

      <div className="content-section workout">
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Workout!
        </h1>
        <p>Workout Seciton</p>
      </div>

      <div className="content-section recipe">
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Recipe
        </h1>
        <p> blablalblabdsldsjdkdggdjsgsdkjlgsljfsdjlkg</p>
      </div>

    </div>
  )
}

const AboutPage = () => {
  return (
    <div>
      <NavMenu />
      <p>ABOUT: This is the about page.</p>
    </div>
  )
}

const WorkoutsPage = () => {
  return (
    <div>
      <NavMenu />
      <p>WORKOUTS: This is the workouts page.</p>
    </div>
  )
}

const RecipesPage = () => {
  return (
    <div>
      <NavMenu />
      <p>RECIPES: This is the recipes page.</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <AboutPage path="/about" />
      <WorkoutsPage path="/workouts" />
      <RecipesPage path="/recipes" />
    </Router>
  );
}

export default App;
