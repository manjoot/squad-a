import React from 'react';
import NavMenu from './containers/NavMenu/NavMenu'
import RecipesAPI from './components/Recipes/RecipesAPI'
import CardGrid from './components/Workout Page/cardsection'
import './App.css';

//Local Images
import Logo from './assets/logos/logo_white_bg.png'
import WorkoutImage from './assets/images/workout.jpg'
import RecipeImage from './assets/images/recipe.jpg'

//Reach Router
import { Router } from '@reach/router'

//Material UI Grid for Two Images
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '150px'
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
          <img src={Logo} alt="cool" />
        </div>
      </div>

      <div className="content-section">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
            <img className="image img1" src={WorkoutImage} alt="Workouts" />
            </Grid>
            <Grid item xs={4}>
            <img className="image img2" src={RecipeImage} alt="Recipes" />
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Social Media Idea Section (Placeholder) */}

      <div className="content-section">
        <h1 styles={{textAlign: 'center'}}>Section For Imah's idea</h1>
      </div>

    </div>
  )
}

const AboutPage = () => {
  return (
    <div className="content">
      <NavMenu />
      <div className="content-section welcome">
        <div className="header">
          <img src="https://files.slack.com/files-pri/TCX5TJ8DD-F0124RKC5Q9/nourish___lift-5.png" alt="cool" />
        </div>
      </div>
      <p>ABOUT: This is the about page.</p>
    </div>
  )
}

const WorkoutsPage = () => {
  return (
    <div className="content">
      <NavMenu />
      <div className="content-section welcome">
        <div className="header">
          <img src="https://files.slack.com/files-pri/TCX5TJ8DD-F0124RKC5Q9/nourish___lift-5.png" alt="cool" />
        </div>
      </div>
      <p>WORKOUTS: This is the workouts page.</p>
      <CardGrid />
    </div>
  )
}

const RecipesPage = () => {
  return (
    <div className="content">
      <NavMenu />
      <div className="content-section welcome">
        <div className="header">
          <img src="https://files.slack.com/files-pri/TCX5TJ8DD-F0124RKC5Q9/nourish___lift-5.png" alt="cool" />
        </div>
      </div>
      <RecipesAPI />
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
