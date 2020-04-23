import { createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addTodo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteTodo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteTodo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const addTodo = createAction('ADD');
const deleteTodo = createAction('DELETE');

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    // return [{ text: action.payload, id: Date.now() }, ...state];
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  },
});

export const actionCreators = {
  addTodo,
  deleteTodo,
};

const store = configureStore({ reducer });

export default store;
