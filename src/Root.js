import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// destructuring the props to pass the initialState to other components with a default of
// an empty object
export default ({ children, initialState = {} }) => {
  // asynchronous action creators
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return (
    //   we can now provide some optional starting state for the comment list
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
