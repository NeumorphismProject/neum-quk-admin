import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
import { store } from './store/appStore';
import App from './App';
import './index.css';

// const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <Provider store={store}>
    <App />
  </Provider>
);
