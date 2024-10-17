import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  queryList: [], // List of all queries and responses
};

const querySlice = createSlice({
  name: 'queries',
  initialState,
  reducers: {
    addQuery: (state, action) => {
      // Append new query and response to the queryList
      state.queryList.push(action.payload);
    },
  },
});

export const { addQuery } = querySlice.actions;
export default querySlice.reducer;
