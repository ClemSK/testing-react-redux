import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

// not very useful - would be better to test a definitive action
it('handles action with unknown type', () => {
  // passing an empty object is like passing an action with an unknown type
  const newState = commentsReducer([], { type: '' });

  expect(newState).toEqual([]);
});
