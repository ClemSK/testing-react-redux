import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// now wrapped is defined and accessible to the tests below
// let will enable uss to reassign the value of wrapped
let wrapped;

// Before each test the component will be loaded
beforeEach(() => {
  // wrapped means there is add'l functionality - it could be called component
  wrapped = shallow(<App />);
});

// it describes the file that you're in to simplify understanding
// shallow will the given component but nto any components inside of it.
it('shows a comment box', () => {
  //   looking for an instance of Comment Box as it comes from an array
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

// my implementation of the Comment List test
it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
