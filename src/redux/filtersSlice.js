import { createSlice } from '@reduxjs/toolkit';

const { statusFilters } = require('./constants');

const filtersInitialState = {
  status: statusFilters.all,
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, { payload }) {
      return {
        ...state,
        status: payload,
      };
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
