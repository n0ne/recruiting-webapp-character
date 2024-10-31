import { configureStore } from '@reduxjs/toolkit'

import charactersReducer from './slice'

const store = configureStore({
  reducer: charactersReducer,
});

export default store

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;