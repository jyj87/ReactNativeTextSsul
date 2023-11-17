import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_a';

/**
 * setInitArticleList: 어플 실행시 초기 셋팅 데이터
 */
const homeSlice = createSlice({
  name: 'home',
  initialState: {homeArticleList: []},
  reducers: {
    setInitArticleList: (state, action) => {
      log.info('homeSlice.setInitArticleList START');
      state.homeArticleList = action.payload;
      log.debug('homeArticleList 設定データ', state.homeArticleList);
      log.info('homeSlice.setInitArticleList END');
    },
    setRefreshData: (state, action) => {
      state.homeArticleList = [...state.homeArticleList, ...action.payload];
    },
  },
});

export default homeSlice.reducer;
export const {setInitArticleList,setRefreshData} = homeSlice.actions;
