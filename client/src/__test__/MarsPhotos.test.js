import { render, screen } from '@testing-library/react';
import Mars from '../routes/MarsPhotos.jsx';
import React from 'react';

it('Testing for footer', () => {
  render(<Mars />);
  expect(screen.getByText("Mars Photos Page")).toBeInTheDocument();
});

it('url testing', () => {
  expect(global.window.location.href).toContain('http://localhost/');
});