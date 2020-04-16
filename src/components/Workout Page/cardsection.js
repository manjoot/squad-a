import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorkoutCard from './Cards'

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
            <WorkoutCard 
            nameOfExercise="Love Handle Shredder"
            dateOfPublishing="09.03.2020"
            titleOfExercise="Back"
            shortDescription="Get rid of those stubborn love handles with 8 simple exercises."
            longDescription=
            
            {<ol>
            
            <li>One Side Leg Raises (3 sets, 15 seconds per side)</li>
            
            <li>Bench Leg Raises (3 sets, 30 seconds)</li>
            
            <li>Ab Bikes (3 sets, 10 seconds)</li>
            
            <li>Glute Bridge (3 sets, 30 seconds)</li>
            
            <li>Plank (3 sets, 30 seconds)</li>
            
            <li>Plank Rotations (3 sets, 30 seconds per side)</li>
            
            <li>Crunches (3 sets, 15 seconds)</li>
            
            <li>Flutter Kicks (3 sets, 15 seconds)</li>
            </ol>}></WorkoutCard>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Bye Bye Back Fat"
            dateOfPublishing="16.03.2020"
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
            nameOfExercise="Butt and Gut"
            dateOfPublishing="23.03.2020"
            titleOfExercise="Mid-Section"
            shortDescription="Tone the butt and burn the gut with these 6 simple exercises."
            longDescription=
            
            {<ol>

            <li>Plank Kick Backs (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Bridges (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Bridge Taps (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Leg Raises (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Crunch Kicks (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Sit-ups (20 x 3 sets, 1 minute breaks between sets)</li>
            </ol>}></WorkoutCard>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Get Rid - Saddlebags"
            dateOfPublishing="30.03.2020"
            titleOfExercise="Mid-Section"
            shortDescription="Define the area between your thighs and hips for an hourglass figure."
            longDescription=
            
            {<ol>
            <li>Elbow Plank With Donkey Kick (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Sumo Squats (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Static Lunges (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Squat with Kick (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Clamshells Band Exercise (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Side Lunges (20 x 3 sets, 1 minute breaks between sets)</li>
            </ol>}></WorkoutCard>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Fatty Arms Begone"
            dateOfPublishing="06.04.2020"
            titleOfExercise="Arms"
            shortDescription="Trade in the fat on your arms for arms of steel."
            longDescription=
            
            {<ol>
            
            <li>Tricep Dips (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Bicep Curls (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Punches (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Arm Raises (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Raises Arm Circles (20 x 3 sets, 1 minute breaks between sets)</li>

            <li>Raises Arm Hold (20 seconds x 3 sets, 1 minute breaks between sets)</li>
            </ol>}></WorkoutCard>
        </Grid>
        <Grid item xs={12} sm={4}>
            <WorkoutCard 
            nameOfExercise="Waist Cinching Exercises"
            dateOfPublishing="13.04.2020"
            titleOfExercise="Mid-Section"
            shortDescription="Target your abs and with these core exercises."
            longDescription=
            {<ol>
           
           <li>Russian Twist (60 seconds x 3 sets, 1 minute breaks between sets)</li>
             
           <li>Reverse Crunches (60 seconds x 3 sets, 1 minute breaks between sets)</li>

           <li>Dead Bug (60 seconds x 3 sets, 1 minute breaks between sets)</li>

           <li>Back Extensions (60 seconds x 3 sets, 1 minute breaks between sets)</li>

           <li>Bicycle Crunches (60 seconds x 3 sets, 1 minute breaks between sets)</li>

           <li>Seated Knee Tucks (60 seconds x 3 sets, 1 minute breaks between sets)</li>

           <li>Alternate Heel Touches (60 seconds x 3 sets, 1 minute breaks between sets)</li>

           <li>Bird Dogs (60 seconds x 3 sets, 1 minute breaks between sets)</li>

           <li>Side Plank (60 seconds x 3 sets, 1 minute breaks between sets)</li>

            </ol>}>

            </WorkoutCard>
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