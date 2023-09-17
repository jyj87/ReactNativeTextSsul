import {createSlice} from '@reduxjs/toolkit';
import { tempData } from '../data/tempData';

const searchSlice = createSlice({
  name: 'search',
  initialState: {searchData : tempData },
  reducers: {
    increase: (state, action) => {
      
    },
  },
});

export default searchSlice.reducer;
export const {increase} = searchSlice.actions;
