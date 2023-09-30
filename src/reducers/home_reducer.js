import {createSlice} from '@reduxjs/toolkit';
import {tempData} from '../data/tempData';
import {log, logInfoReducer} from '../log/log_c';

/**
 * getInitPostList: Home화면 진입시 Post데이터 취득
 * 주의:코멘트는 등록일 기준으로 가져온다
 */
const homeSlice = createSlice({
  name: 'home',
  initialState: {homePostList: []},
  reducers: {
    getInitPostList: (state, action) => {
      state.homePostList = tempData;
      logInfoReducer('homeSlice', 'getInitPostList', 'homePostList', state.homePostList);
    },
  },
});

export default homeSlice.reducer;
export const {getInitPostList} = homeSlice.actions;
