import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../pages/list';
import Detail from '../pages/detail';
import PageNotFound from '../pages/pageNotFound';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/character/:id" element={<Detail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
