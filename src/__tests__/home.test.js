/* eslint-disable */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Store from '../store/store';
import Home from './components/home'

it('Home page component snapshot test', () => {
  const homeRender = TestRenderer
    .create(
      <Provider store={Store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(homeRender).toMatchSnapshot();
});