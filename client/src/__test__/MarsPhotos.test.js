import { render, screen } from '@testing-library/react';
import Mars from '../routes/MarsPhotos.jsx';
import React from 'react';

it('Testing for header', () => {
  render(<Mars />);
  expect(screen.getAllByDisplayValue("05/07/2023"));
});

it('url testing', () => {
  expect(global.window.location.href).toContain('http://localhost/');
});