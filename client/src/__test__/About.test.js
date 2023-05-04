import { render, screen } from '@testing-library/react';
import About from '../routes/About.jsx';
import React from 'react';

it('Testing about for relative text', () => {
  render(<About />);
  expect(screen.getByText("About")).toBeInTheDocument();
});