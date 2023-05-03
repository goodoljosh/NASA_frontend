import { render, screen } from '@testing-library/react';
import Pod from '../routes/PictureoftheDay.jsx';
import React from 'react';

it('Testing for header', () => {
  render(<Pod />);
  expect(screen.getByText("")).toBeInTheDocument();
});