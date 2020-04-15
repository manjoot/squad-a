import React from 'react';
import NavMenu from './containers/NavMenu/NavMenu'
import WorkoutCard from './components/Workout Page/Cards'
import CardGrid from './components/Workout Page/cardsection'
import './App.css';

//Reach Router
import { Router } from '@reach/router'

//Pages

const HomePage = () => {
  return (
    <div>
      <NavMenu />
      <p>HOME: This is the home page.</p>
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
      <CardGrid />
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
