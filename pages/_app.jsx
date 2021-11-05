import React from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store';
/* eslint-disable react/jsx-props-no-spreading */

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
