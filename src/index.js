import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Render a React element into the DOM in the supplied container and return a reference to the component
   If the React element was previously rendered into container, this will perform an update on it 
   and only mutate the DOM as necessary to reflect the latest React element. */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
