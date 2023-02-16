import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from '.';

const pageNotFound = (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

test('renders PageNotFound correctly', () => {
  render(pageNotFound);

  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText('UPS!!!')).toBeInTheDocument();
  expect(screen.getByText('Page not found')).toBeInTheDocument();
  expect(screen.getByTestId('button')).toBeInTheDocument();
});
