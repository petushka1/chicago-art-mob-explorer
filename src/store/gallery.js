import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.artic.edu/api/v1/';
const artists = 'artists';
const artworks = 'artworks';
const exhibitions = 'exhibitions';
// search request by default cats
const search = 'https://api.artic.edu/api/v1/artworks/search?q=cats';
const LIMIT = 100;

export const fetchArtworks = createAsyncThunk(
  'gallery/fetchArtworks',
  (page = 1) => fetch(`${baseURL}${artworks}?page=${page}&limit=${LIMIT}`)
    .then((res) => res.json())
    .then((data) => data),
);

export const fetchExhibitions = createAsyncThunk(
  'gallery/fetchExhibitions',
  (page) => fetch(`${baseURL}${exhibitions}?page=${page}&limit=${LIMIT}`)
    .then((res) => res.json())
    .then((data) => data),
);

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: [[], 0],
  reducers: {

  },

  extraReducers: {
    [fetchArtworks.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      console.log(data);
      const newState = data.map((item) => (
        {
          id: item.id,
          image_id: item.image_id,
          artist_id: item.artist_id,
          category_ids: item.category_ids,
          artwork_type_id: item.artwork_type_id,
          category_titles: item.category_titles,
          title: item.title,
          artist_title: item.artist_title,
          date_start: item.date_start,
          date_end: item.date_end,
          place_of_origin: item.place_of_origin,
          artwork_type_title: item.artwork_type_title,
          technique_titles: item.technique_titles,
          material_titles: item.material_titles,
          medium_display: item.medium_display,
          thumbnail: item.thumbnail.lqip,
        }));
      return newState;
    },

    [fetchExhibitions.fulfilled]: (state, { payload }) => {
      const { data, pagination } = payload;
      const newState = data.filter((item) => item.artist_ids.length > 0).map((item) => ({
        id: item.id,
        title: item.title,
        image_url: item.image_url,
        status: item.status,
        artwork_ids: item.artwork_ids,
        department_display: item.department_display,
        artist_ids: item.artist_ids,
      }));
      console.log(newState);
      const { total } = pagination;
      return [newState, total];
    },

  },
});

export const galleryReduser = gallerySlice.actions;
export default gallerySlice.reducer;
