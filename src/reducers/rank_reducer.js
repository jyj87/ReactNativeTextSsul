import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_a';

const rankSlice = createSlice({
  name: 'rank',
  initialState: {
    rankArticleList : []
  },
  reducers: {
    getInitRankPostList: (state, action) => {
      log.info('homeSlice.getInitRankPostList START');
      state.rankArticleList =action.payload
      log.debug('rankArticleList 設定データ', state.rankArticleList);
      log.info('homeSlice.getInitRankPostList END');
    },
  },
});

export default rankSlice.reducer;
export const {getInitRankPostList} = rankSlice.actions;
