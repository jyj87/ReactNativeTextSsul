import {createSlice} from '@reduxjs/toolkit';
import {log, logInfoReducer} from '../log/log_c';
import {
  searchPostList,
  refreshTampSub3PostSet,
  sortFlag,
} from '../data/tempSearchData';

const searchSlice = createSlice({
  name: 'search',
  initialState: {searchPostList: [], sortFlag},
  reducers: {
    getInitSearchPostList: (state, action) => {
      state.searchPostList = searchPostList;
      // 1 : 좋아요
      // 2 : 조회수
      // 3 : 최신글
      // 4 : 댓글순
      state.sortFlag = 3;
      logInfoReducer(
        'searchSlice',
        'getInitSearchPostList',
        'searchPostList',
        state.searchPostList,
      );
      logInfoReducer(
        'searchSlice',
        'getInitSearchPostList',
        'sortFlag',
        state.sortFlag,
      );
    },
    getRefreshData: (state, action) => {
      state.searchPostList = [
        ...state.searchPostList,
        ...refreshTampSub3PostSet,
      ];
      logInfoReducer(
        'searchSlice',
        'getRefreshData',
        'searchPostList',
        state.searchPostList,
      );
    },
    getSortData: (state, action) => {
      state.sortFlag = action.payload;
      logInfoReducer('searchSlice', 'getSortData', 'sortFlag', state.sortFlag);
    },
  },
});

export default searchSlice.reducer;
export const {getInitSearchPostList, getRefreshData, getSortData} =
  searchSlice.actions;
