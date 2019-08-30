import React from 'react';
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ value, saveTodo, updateValue }) =>(
    <form
        onSubmit={e => {
        e.preventDefault();
        saveTodo();
        }}
    >
    <TextField
        type="text"
        placeholder="Add todo..."
        margin="normal"
        value={value}
        onChange={updateValue}
        />
    </form>
); 

export default TodoForm;