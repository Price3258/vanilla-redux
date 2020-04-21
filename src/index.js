// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const handleTodo = (type, value) => {
  switch (type) {
    case ADD_TODO:
      return {
        type,
        text: value,
      };
    case DELETE_TODO:
      return {
        type,
        id: value,
      };
    default:
      return null;
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [newTodo, ...state];
    case DELETE_TODO:
      console.log(action);
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
const paintTodos = () => {
  ul.innerHTML = '';
  const todos = store.getState();
  todos.forEach((todo) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.addEventListener('click', dispatchDeleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(button);
    ul.appendChild(li);
  });
};
store.subscribe(() => console.log(store.getState()));
store.subscribe(paintTodos);

const dispatchAddTodo = (text) => {
  store.dispatch(handleTodo(ADD_TODO, text));
};
const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(handleTodo(DELETE_TODO, id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  dispatchAddTodo(todo);
};

form.addEventListener('submit', onSubmit);
