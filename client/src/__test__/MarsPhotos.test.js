import { render, screen } from '@testing-library/react';
import Mars from '../routes/MarsPhotos.jsx';
import React from 'react';

it('Testing for header', () => {
  render(<Mars />);
  expect(screen.getByText("2020")).toBeInTheDocument();
  expect(screen.getByText("©")).toBeInTheDocument();
});