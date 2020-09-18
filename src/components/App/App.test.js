import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial page welcome message', () => {
  const { getByText } = render(<App />);
  const welcomeMess = getByText(/how seal-y/i);
  expect(welcomeMess).toBeInTheDocument();
});

test('render start game button', () => {
  const { getByText } = render(<App />);
  const startButton = getByText(/Start Game/);
  expect(startButton).toBeInTheDocument();
});