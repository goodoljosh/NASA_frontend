import { render, screen } from '@testing-library/react';
import About from '../routes/About.jsx';
import React from 'react';

it('Testing for header', () => {
  render(<About />);
  expect(screen.getByText("About")).toBeInTheDocument();
});