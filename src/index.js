import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  // initially pass an empty object as there are no initial state/value to pass to the Provider/store
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
