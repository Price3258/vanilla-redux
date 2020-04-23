import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Detail({ todo }) {
  const id = useParams();
  //   console.log(id);
  return (
    <div>
      <h1>Detail</h1>
      <h4>{todo?.text}</h4>
      <h5>created at : {todo?.id}</h5>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { todo: state.find((todo) => todo.id === Number(id)) };
}

export default connect(mapStateToProps)(Detail);
