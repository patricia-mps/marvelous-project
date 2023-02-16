import { render, screen } from '@testing-library/react';
import Props from './Form.types';
import Form from '.';

const props: Props = {
  onSubmit: jest.fn(),
  onCancel: jest.fn(),
};

test('renders Form correctly', () => {
  render(<Form {...props} />);

  expect(screen.getByTestId('form')).toBeInTheDocument();
  expect(screen.getByTestId('input-thumbnail')).toBeInTheDocument();
  expect(screen.getByTestId('input-name')).toBeInTheDocument();
  expect(screen.getByTestId('input-description')).toBeInTheDocument();
  expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
  expect(screen.queryByText(/Value must not be empty./i)).not.toBeInTheDocument();
  expect(screen.getByText(/Because this is a demo/i)).toBeInTheDocument();
});
