import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import { createMockStore } from 'redux-test-utils';
import Character from '../../interfaces/character';
import Detail from '.';

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
    new: false,
  },
];

beforeAll(() => {
  window.history.pushState({}, 'Detail Page', '/character/1');
});

const store = createMockStore({
  characters: {
    items: [...items],
    item: items[0],
    loading: false,
    isUnsuccessful: false,
    message: '',
  },
});

const pageDetail = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/character/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

test('renders Detail correctly', () => {
  render(pageDetail);

  expect(screen.getAllByTestId('button')).toHaveLength(2);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Description')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', 'lorem.png');
  expect(screen.getByRole('img')).toHaveAttribute('alt', 'First Element');
});

test('renders Detail click edit', async () => {
  window.HTMLElement.prototype.scrollIntoView = function () {};
  render(pageDetail);

  fireEvent.click(screen.getByText(/edit/i));
  await waitFor(() => {
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});
