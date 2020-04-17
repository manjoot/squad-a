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
      </Grid>
    </div>
  );
}