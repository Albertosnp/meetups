import { combineReducers, configureStore } from '@reduxjs/toolkit';
import meetupsSlice from './meetups.slice';

const rootReducer = combineReducers({
  meetups: meetupsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
