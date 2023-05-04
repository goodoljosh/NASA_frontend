import { render, screen } from '@testing-library/react';
import Date from '../components/DatePicker.jsx';
import React from 'react';

it('Testing for text for datepicker', () => {
  render(<Date />);
  expect(screen.getByText("DatePicker:")).toBeInTheDocument();
});