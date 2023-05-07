import { render, screen } from '@testing-library/react';
import Date from '../components/DatePicker.jsx';
import React from 'react';

it('Testing for text for datepicker', () => {
  render(<Date />);
  expect(screen.getByText("DatePicker:")).toBeInTheDocument();
});

it('Testing for ', () => {
  render(<Date />);
  expect(screen.getAllByDisplayValue("05/07/2023"));
})

it('url testing', () => {
  expect(global.window.location.href).toContain('http://localhost/');
});
