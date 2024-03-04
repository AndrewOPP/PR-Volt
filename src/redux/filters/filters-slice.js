import { createSlice } from '@reduxjs/toolkit'

const filtersInitialState = 'all'

const filtersSlice = createSlice({
  'name': 'filters',
  'initialState': filtersInitialState,
  'reducers': {
    'changeFilter': {
      reducer(state, action) {
        return (state = action.payload)
      },
    },
  },
})

export const { changeFilter } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
