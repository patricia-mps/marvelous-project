import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

const handleClick = jest.fn();

test('renders Button correctly', () => {
  render(<Button onClick={handleClick} text="Success Button" />);
  expect(screen.getByTestId('button')).toBeInTheDocument();
  expect(screen.getByText(/Success Button/i).classList.contains('success')).toBe(true);

  render(<Button onClick={handleClick} text="Secondary button" type="secondary" />);
  expect(screen.getByText(/Secondary button/i).classList.contains('secondary')).toBe(true);

  render(<Button onClick={handleClick} text="Danger button" type="danger" />);
  expect(screen.getByText(/Danger button/i).classList.contains('danger')).toBe(true);
});

test('renders Button disabled', () => {
  render(<Button onClick={handleClick} text="Button" disabled />);
  expect(screen.getByText(/Button/i)).toBeDisabled();
  fireEvent.click(screen.getByText(/Button/i));
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test('renders Button onClick prop when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} text="Button" />);
  fireEvent.click(screen.getByText(/Button/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
