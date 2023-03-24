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
      const existFavorite = state.favorites.find(
        (item) => item.id === action.payload
      );
      if (existFavorite) {
        state.favorites = state.favorites.filter(
          ({ id }) => id !== action.payload
        );
      } else {
        const favoriteMeetup = state.meetups.filter(
          ({ id }) => id === action.payload
        );
        state.favorites = [...state.favorites, favoriteMeetup].flat();
      }
    },
  },
});

export const { setAllMeetups, setToggleFavorite } = slice.actions;

export const selectAllMeetups = (state) => state.meetups.meetups;
export const selectFavorites = (state) => state.meetups.favorites;

export default slice.reducer;
