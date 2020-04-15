import React from 'react';
import NavMenu from './containers/NavMenu/NavMenu'
import './App.css';

//Reach Router
import { Router } from '@reach/router'

//Material UI Grid for Two Images
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

//Pages

const HomePage = () => {
  const classes = useStyles(); //Material UI grid style declaration
  return (
    <div className="content">
      <NavMenu />
      <div className="content-section welcome">
        <div className="header">
          <img src="https://files.slack.com/files-pri/TCX5TJ8DD-F0124RKC5Q9/nourish___lift-5.png" alt="cool" />
        </div>
      </div>

      <div className="content-section">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
            <img className="image img1" src="https://files.slack.com/files-pri/TCX5TJ8DD-F011LSZ57CN/pull_up_-_happily_grey.jpg" alt="cool" />
            </Grid>
            <Grid item xs={6}>
            <img className="image img2" src="https://files.slack.com/files-pri/TCX5TJ8DD-F0124SN7VK3/sesame-noodles-ingredients.jpg" alt="cool" />
            </Grid>
          </Grid>
        </div>
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
