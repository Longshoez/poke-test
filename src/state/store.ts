import { configureStore, Store, combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './pokemons/pokeSlice'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedState = persistReducer(persistConfig, rootReducer)

export const store: Store = configureStore({
  reducer: persistedState,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

//vv ??
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)
