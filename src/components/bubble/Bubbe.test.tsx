import { render, screen } from '@testing-library/react';
import Bubble from '.';

test('renders Bubble correctly', () => {
  render(<Bubble highlight={true} body={<p>Bubble text</p>} />);

  expect(screen.getByTestId('bubble')).toBeInTheDocument();
  expect(screen.getByText(/Bubble text/i)).toBeInTheDocument();
  expect(screen.getByTestId('bubble')).toHaveClass('component highlight');
});
