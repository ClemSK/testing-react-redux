import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi Clem!');
});
