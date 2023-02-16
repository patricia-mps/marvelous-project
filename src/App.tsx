import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store';
import Router from './router';
import Header from './components/header';
import Footer from './components/footer';
import 'react-toastify/dist/ReactToastify.css';

import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </Provider>
  );
}

export default App;
