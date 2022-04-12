import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // 1. attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // 2. find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    //   to update the components with the comments
    wrapped.update();
    // 3. expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);

    // 'done' signals to jest that the function has been completed and that it can complete the function
    // the setTimeout was added to give moxios time to run and not throw a Jest error
    done();
    wrapped.unmount();
  });
});
