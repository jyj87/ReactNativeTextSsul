import {createSlice} from '@reduxjs/toolkit';
import {refreshTampSub3PostSet, sortFlag} from '../data/tempSearchData';

/**
 * getInitSearchPostList: 어플 실행시 초기 셋팅 데이터
 * getRefreshData : 스크롤바를 아래를 내렸을 때 추가 데이터 취득
 * getSortData: 상단 4개의 SortButton클릭시, Sort처리
 * insertSearchBarText: SearchBar에 Text입력시 처리
 */
const searchSlice = createSlice({
  name: 'search',
  initialState: {articlesList: [],searchPostList: [], sortFlag: 3},
  reducers: {
    getInitSearchPostList: (state, action) => {
      state.articlesList = action.payload;
      // 1 : 좋아요
      // 2 : 조회수
      // 3 : 최신글
      // 4 : 댓글순
      state.sortFlag = 3;
    },
    getRefreshData: (state, action) => {
      state.searchPostList = [
        ...state.searchPostList,
        ...refreshTampSub3PostSet,
      ];
    },
    // ★ backEnd sort? frontEnd sort?
    getSortData: (state, action) => {
      state.sortFlag = action.payload.sortFlag;
    },
    // ★ DB에서 검색어를 통해 데이터를 취득
    insertSearchBarText: (state, action) => {
      // action.payload.searchBarText;
      state.searchPostList = refreshTampSub3PostSet;
    },
  },
});

export default searchSlice.reducer;
export const {
  getInitSearchPostList,
  getRefreshData,
  getSortData,
  insertSearchBarText,
} = searchSlice.actions;
