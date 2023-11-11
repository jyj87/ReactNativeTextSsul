import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_a';

/**
 * getInitArticleList: 어플 실행시 초기 셋팅 데이터
 */
const homeSlice = createSlice({
  name: 'home',
  initialState: {homeArticleList: []},
  reducers: {
    getInitArticleList: (state, action) => {
      log.info('homeSlice.getInitArticleList START');
      state.homeArticleList = action.payload;
      log.debug('homeArticleList 設定データ', state.homeArticleList);
      log.info('homeSlice.getInitArticleList END');
    },
    getRefreshData: (state, action) => {
      state.homeArticleList = [...state.homeArticleList, ...action.payload];
    },
  },
});

export default homeSlice.reducer;
export const {getInitArticleList,getRefreshData} = homeSlice.actions;
