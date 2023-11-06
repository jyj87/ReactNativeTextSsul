import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_a';

/**
 * getInitPostList: 어플 실행시 초기 셋팅 데이터
 */
const homeSlice = createSlice({
  name: 'home',
  initialState: {homeArticleList: []},
  reducers: {
    getInitPostList: (state, action) => {
      log.info('homeSlice.getInitPostList START');
      state.homeArticleList = action.payload;
      log.debug('homeArticleList 設定データ', state.homeArticleList)
      log.info('homeSlice.getInitPostList END');
    },
  },
});

export default homeSlice.reducer;
export const {getInitPostList} = homeSlice.actions;
