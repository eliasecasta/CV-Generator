import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import MainLayout from './components/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
);
