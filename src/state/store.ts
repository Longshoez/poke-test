import { configureStore, Store } from '@reduxjs/toolkit'
import pokemonReducer from './pokemons/pokeSlice'

export const store: Store = configureStore({
  reducer: {
    pokemon: pokemonReducer
  }
})

//vv ??
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
