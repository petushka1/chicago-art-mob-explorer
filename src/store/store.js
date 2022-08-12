import { configureStore } from '@reduxjs/toolkit';
import gallerySlice from './gallery';

const Store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});

export default Store;
