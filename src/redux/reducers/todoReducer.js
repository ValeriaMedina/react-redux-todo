import { UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from "../actions/actionTypes";

const INITIAL_STATE = {
  value: "",
  todos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload
      };

    case SAVE_TODO:
      return {
        ...state,
        value: "",
        todos: [
          ...state.todos,
          {
            value: state.value,
            completed: false
          }
        ]
      };
      case DELETE_TODO:
          return {
            ...state,  // 
            todos: state.todos.filter ((_, index) => index !== action.payload)   // crea un filtro del
          };
    case TOGGLE_COMPLETED: 
    return {
        ...state,
        todos:state.todos.map((todo,index)=> {      //aquí el map nos permite crear un nuevo objeto, usa los parametros todo = -objeto original -index= posición (no esta definido)
            return index === action.payload ?       // revisa que el valor index sea igual al valor que tiene en el payload
            {...todo, completed: !todo.completed}   // si el valor es correcto, crea una copia del arreglo y actualiza el completed por el contrario de ese valor que tenga
            :todo;                                  // si no deja el objeto igual 
        })
    };
      
    default:
      return state;
  }
};
