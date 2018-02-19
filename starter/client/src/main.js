import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './app/store';
import App from './components/app';

import './style/main.scss';

const store = createStore();

render(
  <Provider store={store}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </Provider>,
  document.getElementById('root'),
);
