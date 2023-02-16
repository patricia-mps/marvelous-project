import { render, screen } from '@testing-library/react';
import Modal from '.';

test('renders Modal correctly', () => {
  render(<Modal title="" body={<span>Body</span>} footer={<span>Footer</span>} />);

  expect(screen.getByTestId('modal')).toBeInTheDocument();
  expect(screen.getByText('Body')).toBeInTheDocument();
  expect(screen.getByText('Footer')).toBeInTheDocument();
});
