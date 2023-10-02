import {createSlice} from '@reduxjs/toolkit';
import {tempData} from '../data/tempData';
import {log, logInfoReducer} from '../log/log_c';

/**
 * getInitPostList: 어플 실행시 초기 셋팅 데이터
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
