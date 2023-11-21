import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_a';
/**
 * insertPost: 작성한 게시글을 DB에 저장
 */
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    member: {},
    articleList: [],
    commentList: [],
    userInfo: {},
  },
  reducers: {
    setInitUserInfo: (state, action) => {
      log.info('profileSlice.setInitUserInfo START');
      state.member =action.payload.userInfo.member
      state.articleList = action.payload.userInfo.userArticleAndCommentList[0].articleAndCommentList;
      state.commentList = action.payload.userInfo.userArticleAndCommentList[1].articleAndCommentList;
      state.userInfo = action.payload.userInfo;

      log.debug('Init時UserInfo 設定データ', state);
      log.info('profileSlice.setInitUserInfo END');
    },
    setUserInfo: (state, action) => {
      log.info('profileSlice.setUserInfo START');
      state.member =action.payload.userInfo.member
      state.articleList = action.payload.userInfo.userArticleAndCommentList[0].articleAndCommentList;
      state.commentList = action.payload.userInfo.userArticleAndCommentList[1].articleAndCommentList;
      state.userInfo = action.payload.userInfo;


      log.debug('Login時UserInfo 設定データ', state);
      log.info('profileSlice.setUserInfo END');
    },
    setUserArticleList: (state, action) => {
      //현재 사용처 없음
    },
    setUserCommentList: (state, action) => {
      //현재 사용처 없음
    },
  },
});

export default profileSlice.reducer;
export const {
  setInitUserInfo,
  setUserInfo,
  setUserArticleList,
  setUserCommentList,
} = profileSlice.actions;
