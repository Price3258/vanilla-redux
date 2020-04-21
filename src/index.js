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

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
let count = 0;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateText();
  console.log('add value');
};
const handleMinus = () => {
  count += -1;
  updateText();
  console.log('minus value');
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
number.innerText = count;
