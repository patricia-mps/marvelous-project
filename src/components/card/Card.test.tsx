import { render, screen, fireEvent } from '@testing-library/react';
import Props from './Card.types';
import Card from '.';

const handleClickCard = jest.fn();
const handleClickRemove = jest.fn();

const props: Props = {
  id: 123,
  thumbnail: 'loremipsum.jpg',
  name: 'Name Card',
  description: 'Description',
  isNew: true,
  onClickCard: handleClickCard,
  onClickRemove: handleClickRemove,
};

test('renders Card correctly', () => {
  render(<Card {...props} />);
  expect(screen.getByTestId('card')).toBeInTheDocument();
  expect(screen.getByText('Name Card')).toBeInTheDocument();
  expect(screen.getByText('Description')).toBeInTheDocument();

  expect(screen.getByTestId('button').classList.contains('danger')).toBe(true);
  expect(screen.getByText(/New/i)).toHaveClass('component highlight');
});

test('renders Card onClickCard prop when clicked', () => {
  render(<Card {...props} />);
  fireEvent.click(screen.getByTestId('card'));
  expect(handleClickCard).toHaveBeenCalledTimes(1);
});

test('renders Card onClickRemove prop when clicked', () => {
  render(<Card {...props} />);
  fireEvent.click(screen.getByTestId('button'));
  expect(handleClickRemove).toHaveBeenCalledTimes(1);
});
