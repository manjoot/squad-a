import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WorkoutCard from './Cards'
import ExerciseAPI from './ExerciseAPI';

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

export default function CardGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
            <ExerciseAPI
              exID={74}
            >

            </ExerciseAPI>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ExerciseAPI
              exID={109}
            >

            </ExerciseAPI>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ExerciseAPI
              exID={81}
            >

            </ExerciseAPI>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ExerciseAPI
              exID={181}
            >

            </ExerciseAPI>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ExerciseAPI
              exID={86}
            >

            </ExerciseAPI>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ExerciseAPI
              exID={143}
            >

            </ExerciseAPI>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Bye Bye Back Fat"
            dateOfPublishing="20.04.2020"
            titleOfExercise="Back"
            shortDescription="Tackle those stubborn areas and lose back fat fast."
            longDescription=
            {<ol>
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
            </ol>}></WorkoutCard>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Eliminate Side Fat"
            dateOfPublishing="27.03.2020"
            titleOfExercise="Mid-section"
            shortDescription="Build your obliques and abs, become blown away by the results."
            longDescription=
            {<ol>
            <li>Ab Bikes (3 sets, 60 seconds)</li>
            
            <li>Dumbbell Oblique Crunches (3 sets, 60 seconds)</li>
            
            <li>Glute Bridge to Leg Raises (3 sets, 45 seconds)</li>
            
            <li>Side Plank Crunches (3 sets, 60 seconds)</li>
            
            <li>Hip Thruster (3 sets, 60 seconds per side)</li>
            
            <li>Plank with Elevated Feet (3 sets, 45 seconds)</li>

            <li>Side Crunch Kicks (3 sets, 45 seconds)</li>

            <li>Crunches (3 sets, 60 seconds)</li>

            <li>Side Plank (3 sets, 60 seconds)</li>

            <li>Bodyweight Squat (3 sets, 60 seconds per side)</li>
            </ol>}></WorkoutCard>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Arm Zapper"
            dateOfPublishing="04.05.2020"
            titleOfExercise="Arms"
            shortDescription="Have super toned arms with 6 simple exercises."
            longDescription=
            {<ol>
            <li>Bicep Curls (3 sets, 10 reps)</li>
            
            <li>Lateral Raises (3 sets, 5 reps)</li>
            
            <li>Arm Hold (3 sets, 10 second hold)</li>
            
            <li>Shoulder Presses (3 sets, 5 reps)</li>
            
            <li>Tricep Extensions (3 sets, 10 reps)</li>
            
            <li>Upright Rows (3 set, 10 reps)</li>
            </ol>}></WorkoutCard>
        </Grid>
      </Grid>
    </div>
  );
}