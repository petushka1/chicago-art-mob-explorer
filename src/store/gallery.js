import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.artic.edu/api/v1/';
const artists = 'artists';
const artworks = 'artworks';
const exhibitions = 'exhibitions';
// search request by default cats
const search = 'https://api.artic.edu/api/v1/artworks/search?q=cats';
const LIMIT = 8;

const fetchArtworks = createAsyncThunk(
  'gallery/fetchArtworks',
  (page = 1) => fetch(`${baseURL}${artworks}?page=${page}&limit=${LIMIT}`)
    .then((res) => res.json())
    .then((data) => data),
);

const fetchArtists = createAsyncThunk(
  'gallery/fetchArtists',
  (page = 1) => fetch(`${baseURL}${artists}?page=${page}&limit=${LIMIT}`)
    .then((res) => res.json())
    .then((data) => data),
);

const fetchExhibitions = createAsyncThunk(
    'gallery/fetchExhibitions',
    (page = 1) => fetch(`${baseURL}${exhibitions}?page=${page}&limit=${LIMIT}`)
      .then((res) => res.json())
      .then((data) => data),
  );

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: [],
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
      return newState
    },
    
    [fetchArtists.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      const newState = data.map(() => ({
        id: item.id,
        title: item.title,
        artwork_ids: item.artwork_ids,
        birth_place:item.birth_place,
        birth_date: item.birth_date,
        death_birth: death_birth,
      }));kk
      console.log(newState);
      return newState
    },

    [fetchExhibitions.fulfilled]: (state, { payload }) => {
        const { data, pagination } = payload;
        const newState = data.map(() => ({
          id: item.id,
          title: item.title,
          image_url: item.image_url,
          status: item.status,
          artwork_ids: item.artwork_ids,
          department_display: item.department_display,
          artist_ids: item.artist_ids,
        }));
        console.log(newState);
        return {
          ...newState,
        total: pagination.total,
      }
      },
  
  },
});

export { fetchArtworks, fetchExhibitions, fetchArtists };
export const galleryReduser = gallerySlice.actions;
export default gallerySlice.reducer;

/*

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

                id: item.id,
                title: item.title,
                artwork_ids: item.artwork_ids,
                birth_date: item.birth_date,
                death_birth: death_birth,

                id: item.id
                title: item.title,
                api_link: item.api_link,

*/


/*

"id": 36138,
            "api_model": "agents",
            "api_link": "https://api.artic.edu/api/v1/agents/36138",
            "title": "Ed Paschke",
            "sort_title": "Paschke, Ed",
            "alt_titles": [
                "Edward F. Paschke"
            ],
            "birth_date": 1939,
            "birth_place": null,
            "death_date": 2004,
            "death_place": null,
            "description": null,
            "ulan_id": null,
            "is_artist": true,
            "agent_type_title": "Individual",
            "agent_type_id": 7,
            "artwork_ids": [
                207100,
                200136,
                192502,
                191316,
                190822,
                156866,
                148438,
                148437,
                135455,
                111990,
                111847,
                111846,
                111845,
                111844,
                102704,
                100903,
                99583,
                97402,
                97056,
                97053,
                93831,
                34149,
                33302,
                198539,
                198538,
                105207,
                117581,
                33301
            ],
            "site_ids": [],
            "suggest_autocomplete_boosted": {
                "input": [
                    "Ed Paschke",
                    "Paschke, Ed",
                    "Edward F. Paschke"
                ],
                "weight": 3
            },
            "suggest_autocomplete_all": {
                "input": [
                    "Ed Paschke",
                    "Paschke, Ed",
                    "Edward F. Paschke"
                ],
                "weight": 3,
                "contexts": {
                    "groupings": [
                        "title"
                    ]
                }
            },
            "last_updated_source": "1976-09-02T11:20:00-05:00",
            "last_updated": "2022-08-09T23:10:52-05:00",
            "timestamp": "2022-08-10T03:29:45-05:00"
        },




        "id": 998,
            "api_model": "exhibitions",
            "api_link": "https://api.artic.edu/api/v1/exhibitions/998",
            "title": "Ink on Paper: Japanese Monochromatic Prints (2009)",
            "is_featured": false,
            "description": "Full-color prints and nishiki-e, or brocade pictures, make up the majority of the Japanese woodblock prints known as ukiyo-e, or pictures of the floating world. This exhibition, however, explores the creativity involved in the lack of color in Japanese prints from the early period of ukiyo-e in the 17th century up to the present day.",
            "short_description": null,
            "web_url": "https://nocache.www.artic.edu/exhibitions/998/ink-on-paper-japanese-monochromatic-prints-2009",
            "image_url": "https://artic-web.imgix.net/f248dbc9-ae32-4013-81d5-773f6fc13b7f/1982.1321MakiHakuProportionI.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=91%2C112%2C2767%2C1556",
            "type": "AIC Only",
            "status": "Closed",
            "aic_start_at": "2009-01-24T00:00:00-06:00",
            "aic_end_at": "2009-05-10T00:00:00-05:00",
            "date_display": null,
            "department_display": "Asian Art",
            "gallery_id": 2147480090,
            "gallery_title": null,
            "artwork_ids": [
                25293,
                22860,
                88506,
                44098,
                19609,
                23474,
                25969,
                41357,
                45716,
                88492,
                23845,
                25966,
                88495,
                19151,
                58544,
                87083,
                58548,
                58549,
                25242,
                185391,
                22867,
                22946,
                24409,
                185390,
                45727,
                21710,
                23932,
                99368,
                16272,
                58530,
                58533,
                19069,
                56236
            ],
            "artwork_titles": [
                "Lingering Snow at Asukayama (Asukayama no bosetsu), from the series \"Eight Views in the Environs of Edo (Edo kinko hakkei no uchi)\"",
                "The Tanabata Festival, from the series \"Amusements of the Five Festival Days (Gosetsu asobi)\"",
                "Seikenji Fuji, from the series \"Mirror of Stone Rubbings of Views of the Provinces (Kohon meihitsu ishizuri kagami)\"",
                "Entrance to Ageyacho, from the series \"The Appearance of Yoshiwara (Yoshiwara no tei)\"",
                "The Demon Shutendoji of Mount Oe (Oeyama Shutendoji), from the series \"Famous Scenes from Japanese Puppet Plays (Yamato irotake)\"",
                "Hara: A Line at the Foot of Mt. Fuji (Suso ichimonji), No. 14 from the series \"Munakata's Tokaido (Tokaido Munakata hanga)\"",
                "The Monkey Bridge in Winter",
                "A Bat Flying near a Pine Tree",
                "Human Beings",
                "Badger, from the series \"Mirror of Stone Rubbings of Views of the Provinces\" (Kohon meihitsu ishizuri kagami)",
                "Towing a Barge in the Snow, from the album The Silver World",
                "Landscape with Waterfall",
                "Tea Kettle, section of a sheet from the series \"Mirror of Stone Rubbings of Views of the Provinces\" (Kohon meihitsu ishizuri kagami)",
                "Actor as a Standing Beauty",
                "The Bright of Evening",
                "Descending Geese",
                "Bird and Fox",
                "The Night Visit, from the series \"The Tale of the Auklet (Uto Hanga-kan)\"",
                "The Evening Bell at Miidera (Mii no bansho), from the series \"Eight Views in Omi Province (Omi hakkei no uchi)\"",
                "Peony from a Roof Tile",
                "Bush Clovers in Summer, from the series \"Choicest Odes Upon Flowers of the Four Seasons (Shuku awase, shiki no hana)\"",
                "The Actors Nakamura Takesaburo I as Kewaizaka no Shosho and Ichikawa Danjuro II as Soga no Goro dressed as a komuso in the play \"Bando Ichi Kotobuki Soga,\" performed at the Nakamura Theater in the first month, 1715",
                "Wild Geese and Reeds",
                "Partial Rosette Segment from a Roof Tile",
                "Ancient People",
                "Standing Beauty",
                "Miyahito of the Ogiya, Whose Assistants Are Tsubaki and Shirabe (Ogiya uchi Miyahito, Tsubaki, Shirabe)",
                "Proportion I",
                "Sea Coast, Futomi",
                "My Daughter Hiroko in Chinese Cotton Dress",
                "Tengai Gate at Todai-ji Temple, Nara from the series Ten views of Nara",
                "The Actor Sawamura Kodenji I as Tsuyu no Mae in the play \"Kanto Koroku,\" performed at the Nakamura Theater in the third month, 1698 (?)",
                "Autumn Flower and Sparrow"
            ],
            "artist_ids": [
                34946,
                36670,
                35839,
                61758,
                35935,
                12510,
                29187,
                37074,
                13960,
                34942,
                37003,
                37394,
                44501,
                35572,
                22996,
                35275
            ],
            "site_ids": [],
            "image_id": null,
            "alt_image_ids": [],
            "document_ids": [],
            "suggest_autocomplete_all": {
                "input": [
                    "Ink on Paper: Japanese Monochromatic Prints (2009)"
                ],
                "contexts": {
                    "groupings": [
                        "title"
                    ]
                }
            },
            "last_updated_source": "1976-09-02T11:20:00-05:00",
            "last_updated": "2022-08-09T23:29:07-05:00",
            "timestamp": "2022-08-10T04:17:39-05:00"
        },

*/