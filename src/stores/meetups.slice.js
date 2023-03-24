import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'meetups',
  initialState: {
    meetups: [],
    favorites: [],
  },
  reducers: {
    setAllMeetups: (state, action) => {
      state.meetups = action.payload;
    },
    setToggleFavorite: (state, action) => {
      const existFavorite = state.favorites.some((id) => id === action.payload);
      if (existFavorite) {
        state.favorites = state.favorites.filter(
          (meetup) => meetup !== action.payload
        );
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    },
  },
});

export const { setAllMeetups, setToggleFavorite } = slice.actions;

export const selectAllMeetups = (state) => state.meetups.meetups;
export const selectFavorites = (state) => state.meetups.favorites;

export default slice.reducer;
