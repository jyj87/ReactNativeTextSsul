import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_a';

/**
 * getInitSearchPostList: 어플 실행시 초기 셋팅 데이터
 * setRefreshData : 스크롤바를 아래를 내렸을 때 추가 데이터 취득
 * getSortData: 상단 4개의 SortButton클릭시, Sort처리
 * insertSearchBarText: SearchBar에 Text입력시 처리
 */
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    articlesList: [],
    searchPostList: [],
    sortFlag: 3,
  },
  reducers: {
    getInitSearchPostList: (state, action) => {
      log.info('searchSlice.getInitSearchPostList START');
      state.articlesList = action.payload;
      // 1 : 좋아요
      // 2 : 조회수
      // 3 : 최신글
      // 4 : 댓글순
      state.sortFlag = 3;
      log.debug('searchArticleList 設定データ', state.articlesList);
      log.info('searchSlice.getInitSearchPostList END');
    },
    setRefreshData: (state, action) => {
      log.info('searchSlice.setRefreshData START');
      state.articlesList = [...state.articlesList, ...action.payload];
      log.debug('searchArticleList 設定データ', state.articlesList);
      log.info('searchSlice.setRefreshData END');
    },
    setSortData: (state, action) => {
      log.info('searchSlice.setSortData START');
      state.sortFlag = action.payload.sortFlag;
      log.debug('現在SortFlag 設定データ', state.articlesList);
      log.info('searchSlice.setSortData END');
    },
    insertSearchBarText: (state, action) => {
      log.info('searchSlice.insertSearchBarText START');
      state.articlesList = action.payload;
      log.debug('searchBarのボタンから設定データ', state.articlesList);
      log.info('searchSlice.insertSearchBarText END');
    },
  },
});

export default searchSlice.reducer;
export const {
  getInitSearchPostList,
  setRefreshData,
  setSortData,
  insertSearchBarText,
} = searchSlice.actions;
