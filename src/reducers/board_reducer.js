import {createSlice} from '@reduxjs/toolkit';
import { tempData } from '../data/tempData';

const boardSlice = createSlice({
  name: 'board',
  initialState: {mainBoards : tempData },
  reducers: {
    increase: (state, action) => {
      
    },
  },
});

export default boardSlice.reducer;
export const {increase} = boardSlice.actions;
