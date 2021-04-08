import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Changed via feature branch!" link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Changed via feature branch!/i);
  expect(linkElement).toBeInTheDocument();
});
