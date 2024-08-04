import { configureStore, Store } from '@reduxjs/toolkit'
import counterReducer from './pokemons/pokeSlice'

export const store: Store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

//vv ??
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
