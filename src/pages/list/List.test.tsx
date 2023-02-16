import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import { createMockStore } from 'redux-test-utils';
import Character from '../../interfaces/character';
import List from '.';

const items: Character[] = [
  {
    id: 1,
    name: 'First Element',
    description: 'description',
    thumbnail: 'lorem.png',
    new: true,
  },
  {
    id: 2,
    name: 'Second Element',
    description: 'description',
    thumbnail: 'lorem.png',
    new: true,
  },
];

const store = createMockStore({
  characters: {
    items: [...items],
    item: items[0],
    loading: false,
    isUnsuccessful: false,
    message: '',
  },
});

const pageList = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

test('renders List correctly', () => {
  render(pageList);

  expect(screen.getAllByTestId('bubble')).toHaveLength(3);
  expect(screen.getAllByTestId('card')).toHaveLength(2);
  expect(screen.getByText('Click here')).toBeInTheDocument();
});

test('renders create new Character modal correctly', async () => {
  render(pageList);
  fireEvent.click(screen.getByText('Click here'));
  expect(screen.getByTestId(/modal/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/cancel/i));
  await waitFor(() => {
    expect(screen.queryByTestId(/modal/i)).not.toBeInTheDocument();
  });
});

test('renders remove Character', async () => {
  render(pageList);
  const firstCard = screen.getAllByTestId('card')[0];
  const removeButon = within(firstCard).getByText('X')

  fireEvent.click(removeButon);
  await waitFor(() => {
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
