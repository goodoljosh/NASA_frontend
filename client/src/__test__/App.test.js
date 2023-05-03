import { render, screen } from '@testing-library/react';
import App from '../App.js';
import React from 'react';

it('Testing for header', () => {
  render(<App />);
  expect(screen.getByText("Nasa API Project")).toBeInTheDocument();
});
