import { render, screen } from '@testing-library/react';
import Pod from '../routes/PictureoftheDay.jsx';
import React from 'react';

it('Testing for picture of the day jsx file', () => {
  render(<Pod />);
  expect(screen.getByText("Nasa Picture Project")).toBeInTheDocument();
  expect(screen.getByText("©")).toBeInTheDocument();
});