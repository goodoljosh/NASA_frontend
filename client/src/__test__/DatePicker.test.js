import { render, screen } from '@testing-library/react';
import Date from '../components/DatePicker.jsx';
import React from 'react';

it('Testing for header', () => {
  render(<Date />);
  expect(screen.getByText("DatePicker:")).toBeInTheDocument();
});