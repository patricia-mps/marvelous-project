import { render, screen } from '@testing-library/react';
import CardSkeleton from '.';

test('renders CardSkeleton correctly', () => {
  render(<CardSkeleton cards={2} />);

  expect(screen.getAllByTestId('cardSkeleton')).toHaveLength(2);
});
