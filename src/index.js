import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';

const App = () => 
  <div>
    <Counter />
  </div>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);


