import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../store';
import { Link } from 'react-router-dom';

function Todo({ id, text, onBtnClick }) {
  return (
    <>
      <Link to={`/${id}`}>
        <li>{text}</li>
      </Link>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
