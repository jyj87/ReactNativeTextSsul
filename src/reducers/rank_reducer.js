import {createSlice} from '@reduxjs/toolkit';
import { tempData } from '../data/tempData';

const rankSlice = createSlice({
  name: 'rank',
  initialState: {mainBoards : tempData },
  reducers: {
    increase: (state, action) => {
      
    },
  },
});

export default rankSlice.reducer;
export const {increase} = rankSlice.actions;
