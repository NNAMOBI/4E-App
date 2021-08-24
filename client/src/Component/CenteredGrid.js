import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; //library from @material-ui/styles, 2021. [online]. Material-ui.com. Available from: https://material-ui.com/styles/basics/
import Paper from '@material-ui/core/Paper';  //library from @material-ui/paper, 2021. [online]. Material-ui.com. Available from: https://material-ui.com/styles/basics/
import Grid from '@material-ui/core/Grid';    //library from @material-ui/grid, 2021. [online]. Material-ui.com. Available from: https://material-ui.com/styles/basics/
import NavigationComponent from './NavigationComponent';

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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    //gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}> */}
              <NavigationComponent />
          {/* </Paper> */}
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}