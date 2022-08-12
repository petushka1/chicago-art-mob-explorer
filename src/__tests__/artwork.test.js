/* eslint-disable */
import { screen, render } from '@testing-library/react';
import Artwork from '../components/artwork';

test('renders Artwork', () => {
  render(
      <Artwork artwork={{
         image_id: 1,
         title: 'Unknown',
         date_start: 'Unknown',
         date_end: 1800,
      }}
      />
  );
  expect(screen.getByRole('heading', { level: 3 })).toMatchSnapshot();
});