import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WorkoutCard from './Cards'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  export default function CardGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacinng={3}>
              <Grid item xs={12} sm={4}>

              <WorkoutCard 
            nameOfExercise="Minestrone Soup"
            dateOfPublishing="09.03.2020"
            titleOfExercise="Back"
            shortDescription="This budget minestrone is the classic Italian soup made with cannellini beans and broken up spaghetti."
            longDescription=
            
            {<ul>
            
            <li>One Side Leg Raises (3 sets, 15 seconds per side)</li>
            
            <li>Bench Leg Raises (3 sets, 30 seconds)</li>
            
            <li>Ab Bikes (3 sets, 10 seconds)</li>
            
            <li>Glute Bridge (3 sets, 30 seconds)</li>
            
            <li>Plank (3 sets, 30 seconds)</li>
            
            <li>Plank Rotations (3 sets, 30 seconds per side)</li>
            
            <li>Crunches (3 sets, 15 seconds)</li>
            
            <li>Flutter Kicks (3 sets, 15 seconds)</li>
            </ul>}></WorkoutCard>

             </Grid>

             <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Green goddess smoothie bowl"
            dateOfPublishing="16.03.2020"
            titleOfExercise="Back"
            shortDescription="Add a splash of colour to your morning with this vibrant breakfast bowl of blended avocado, spinach and nut butter, topped with fresh fruit and seeds"
            longDescription=
  
            {<ul>
            <li>Deadlift (3 sets, 45 seconds)</li>
            
            <li>Swimmers (3 sets, 45 seconds)</li>
            
            <li>Bent Over Rows (3 sets, 60 seconds)</li>
            
            <li>Plank Glute Kickback (3 sets, 60 seconds)</li>
            
            <li>Oblique Raises (3 sets, 30 seconds per side)</li>
            
            <li>Flutter Kicks (3 sets, 60 seconds)</li>

            <li>Bent Over One Arms (3 sets, 60 seconds)</li>

            <li>Burpees (3 sets, 45 seconds)</li>

            <li>Bent Over Rows (3 sets, 60 seconds)</li>

            <li>Plank (3 sets, 30 seconds per side)</li>
            </ul>}></WorkoutCard>
        </Grid>

        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Pan-fried salmon"
            dateOfPublishing="23.03.2020"
            titleOfExercise="Mid-Section"
            shortDescription="Have a perfectly cooked salmon fillet, complete with crisp skin, ready in under 10 minutes."
            longDescription=
            
            {<ul>

            <li>Plank Kick Backs (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Bridges (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Bridge Taps (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Leg Raises (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Crunch Kicks (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Sit-ups (20 x 3 sets, 1 minute breaks between sets)</li>
            </ul>}></WorkoutCard>
        </Grid>






            </Grid>
        </div>
    );
  }