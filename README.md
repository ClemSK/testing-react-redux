# Testing with React-Redux

## Writing tests with Jest and Enzyme

## How to start writing tests

1. Look at each part of the app
   - reducer, action etc.
2. Imagine telling a friend 'here's what this bit of code does'
3. Write a test to verify each part does what you expect

<hr />

### Testing design

- App component
  - shows the comment box inside it
  - shows the comment list inside it
- CommentBox component
  - shows a text area and a button
  - users can enter input into the text area and submit it
  - when the input is submitted, textarea should get emptied
- CommentList component
  - shows one 'li' element per comment
  - text from each comment is visible
- Comments reducer
  - properly hands actions with a type of 'SAVE_COMMENT'
  - doesn't throw an error if it gets an action with any other type
- SaveComment action
  - has a type of 'SAVE_COMMENT'
  - produces an action that has a payload of the new comment's text

Structure of an expect function:

expect(value that we are inspecting). matcher statement (value that we expect to see);

> Once a test passes, try to break it!

<hr />

## Enzyme API

> I'm aware that Enzyme is deprecated at the time of writing (April 2022) and I will be switching to React Testing Library after this project.

### Static

Render the given component and return plain HTML

### Shallow

Render 'just' the given component and none of it's children

### Full DOM

Render the component and all of the its children + let us modify it afterwards

<hr />

### Simulating Events

- Find the element
- Simulate a 'change' event
- Provide a fake event object
- Force the component to update: setState is async so we are forcing the component to rerender
- Assert that the textAreas value has changed

<hr>

### Unit vs Integration tests

| Unit                                                  | Integration                                          |
| ----------------------------------------------------- | ---------------------------------------------------- |
| Few parts                                             | Many parts                                           |
| Does the CommentBox show a button?                    | Does clicking 'Fetch Comments' show a list of 'LI's? |
| Does the CommentList produce a list of 'LI' elements? |                                                      |
| Does the action creator return an object?             |                                                      |

<hr />

### What's happening in the integration test

- Simulating click event on the button element
- action creator gets called
- request is issued - with moxios
- test suite checks to see if 2 LIs are visible
- request succeeds, reducer picks up comments - provided by moxioss
