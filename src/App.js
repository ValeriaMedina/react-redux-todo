import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
    return (
      <React.Fragment>
        <Typography variant="h2" align="center" gutterBottom>
          To-Do List
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <TodoForm />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={8}>
            <TodoList />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

export default App;
