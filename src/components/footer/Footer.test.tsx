import { render, screen } from '@testing-library/react';
import Footer from '.';

test('renders Footer correctly', () => {
  render(<Footer />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
  expect(screen.getByText(/Author/i)).toBeInTheDocument();
  expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  expect(screen.getByText('GitHub')).toBeInTheDocument();
});
