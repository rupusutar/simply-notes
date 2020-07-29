import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/components/App';

test('renders Simply Note app', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Simply Note/i);
  expect(header).toBeInTheDocument();
});
