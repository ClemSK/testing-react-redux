import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;
// 1. component mounts
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

// 3. the component unmounts
// cleanup function after running each test
afterEach(() => {
  wrapped.unmount();
});

// 2. the test runs
it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
});
