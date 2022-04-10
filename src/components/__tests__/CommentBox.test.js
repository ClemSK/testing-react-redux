import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
// 1. component mounts
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

// 3. the component unmounts
// cleanup function after running each test
afterEach(() => {
  wrapped.unmount();
});

// 2. the test runs
it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

// describe can  be used to organise it blocks but also limit the scope of before each
// we can have a specific before each for the following tests
describe('the text area', () => {
  // using the simulate enzyme method to simulate the change in the textarea element
  // adding 'new comment' to act as the e.target.value using the mock
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment',
      },
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form gets submitted, text area gets emptied', () => {
    //  A good approach would be to check that the text area does indeed receive a value before changing to blank.
    // The test above checks for this, but if not already done, it would be good to have it here too.
    //   expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    wrapped.find('form').simulate('submit');

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
