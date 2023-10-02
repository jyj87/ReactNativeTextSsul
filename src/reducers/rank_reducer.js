import {createSlice} from '@reduxjs/toolkit';
import {log, logInfoReducer} from '../log/log_c';
import {
  mainPost,
  subPostList1,
  subPostList2,
  subPostList3,
} from '../data/tempRankData';

const rankSlice = createSlice({
  name: 'rank',
  initialState: {
    rankPostList: {
      mainPost: [],
      subPostList1: [],
      subPostList2: [],
      subPostList3: [],
    },
  },
  reducers: {
    getInitRankPostList: (state, action) => {
      state.rankPostList.mainPost = mainPost;
      state.rankPostList.subPostList1 = subPostList1;
      state.rankPostList.subPostList2 = subPostList2;
      state.rankPostList.subPostList3 = subPostList3;
      // logInfoReducer(
      //   'rankSlice',
      //   'getInitRankPostList',
      //   'rankPostList',
      //   state.rankPostList,
      // );
    },
  },
});

export default rankSlice.reducer;
export const {getInitRankPostList} = rankSlice.actions;
