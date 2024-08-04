import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  value: {};
  pokemonList: [];
  loading: boolean;
  paginationState: number;
}

const initialState: PokemonState = {
  value: {},
  pokemonList: [],
  loading: true,
  paginationState: 0,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setPagination: (state, action: PayloadAction<number>) => {
      state.paginationState = action.payload;
    }
  },
})

export const { setPokemonData, setLoading, setPagination, setPokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer
