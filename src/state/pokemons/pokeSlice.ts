import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: {};
  loading: boolean;
}

const initialState: CounterState = {
  value: {},
  loading: true,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
})

export const { setPokemonData, setLoading } = counterSlice.actions;
export default counterSlice.reducer
