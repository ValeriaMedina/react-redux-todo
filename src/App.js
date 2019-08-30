import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: []
    };
  }
  updateValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  saveTodo = () => {
    if (this.state.value) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
          value:this.state.value,
          completed: false,
        }
        ],
        value: ""
      });
    }
    console.log(this.state);
  };

  deleteTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((_, i) => index !== i)
    });
  };

  toggleCompleted = index => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState ({ todos });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2" align="center" gutterBottom>
          To-Do List
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <TodoForm 
            saveTodo={this.saveTodo} 
            updateValue={this.updateValue} 
            value={this.state.value}/>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={8}>
            <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            toggleCompleted={this.toggleCompleted}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default App;
