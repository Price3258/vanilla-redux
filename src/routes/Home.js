import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import Todo from '../components/Todo';

function Home({ todos, addTodo, deleteTodo }) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
function mapStateToProps(state, ownProps) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
