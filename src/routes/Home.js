import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

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
      <ul>{JSON.stringify(todos)}</ul>
    </>
  );
}
function mapStateToProps(state, ownProps) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
    deleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
