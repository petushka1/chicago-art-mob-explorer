/* eslint-disable */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../store/store';
import Header from '../components/header';
import { fetchExhibitions } from '../store/gallery';

  it('Renders Header Correctly', () => {
    const payload = {
      pagination: {
        total: 6165,
      },
      data: [
        {
          id: '1',
          title: 'Title 1',
          image_url: 'url',
          status: 'closed',
          artwork_ids: [12, 3435, 4, 898],
          department_display: 'some Dep',
          artist_ids: [1, 2],
        },
        {
          id: '2',
          title: 'Title 2',
          image_url: 'url',
          status: 'closed',
          artwork_ids: [12, 3435, 4, 898],
          department_display: 'some Dep',
          artist_ids: [1, 2],
        },
        {
          id: '3',
          title: 'Title 2',
          image_url: 'url',
          status: 'closed',
          artwork_ids: [12, 3435, 4, 898],
          department_display: 'some Dep',
          artist_ids: [1, 2],
        },
      ],
    };

    global.fetch = jest.fn(
      () => Promise.resolve({ json: () => Promise.resolve(payload) }),
    );
    Store.dispatch(fetchExhibitions('gallery/fetchExhibitions'));

    const header = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(header).toMatchSnapshot();
  });
