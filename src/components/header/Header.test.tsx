import { render, screen } from '@testing-library/react';
import Header from '.';

test('renders Header correctly', () => {
  render(<Header />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByText(/THIS/i)).toBeInTheDocument();
  expect(screen.getByText('MARVEL')).toBeInTheDocument();
  expect(screen.getByText('OUS')).toBeInTheDocument();
  expect(screen.getByText('Project')).toBeInTheDocument();
});
