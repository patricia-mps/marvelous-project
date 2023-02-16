import { render, screen, fireEvent } from '@testing-library/react';
import Props from './TextField.types';
import TextField from '.';

const handleChange = jest.fn();
const handleBlur = jest.fn();

const props: Props = {
  value: '',
  label: 'Label for textField',
  name: 'textfieldName',
  placeholder: 'Placeholder for textField',
  onChange: handleChange,
  onBlur: handleBlur,
};

test('renders TextField correctly', () => {
  render(<TextField {...props} />);
  expect(screen.getByTestId('textField')).toBeInTheDocument();
  expect(screen.getByText(/Label for textField/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Placeholder for textField/i)).toBeInTheDocument();
});

test('calls onChange prop when value changed', () => {
  render(<TextField {...props} />);
  fireEvent.change(screen.getByPlaceholderText(/Placeholder for textField/i), {
    target: { value: 'value' },
  });
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('calls onBlur prop when value changed', () => {
  render(<TextField {...props} />);
  screen.getByPlaceholderText(/Placeholder for textField/i).focus();
  screen.getByPlaceholderText(/Placeholder for textField/i).blur();
  expect(handleBlur).toHaveBeenCalledTimes(1);
});
