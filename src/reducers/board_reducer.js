import {createSlice} from '@reduxjs/toolkit';
import {selectPost, initBoardPost} from '../data/tempSearchData';
import {log} from '../log/log_a';

/**
 * initPost: Post 기본 틀 Entity
 */
const initPost = initBoardPost;

/**
 * setArticleData: 선택한 Post를 화면에 출력하기 위해 세팅
 * incrementLikeCount: 좋아요 + 1 증가
 * insertCommentText: 코맨트 등록
 * incrementCommentLikeCount: 코맨트 좋아요 + 1 증가
 */
const boardSlice = createSlice({
  name: 'board',
  initialState: {post: initPost,article: {},articleCommentList:[]},
  reducers: {
    setArticleData: (state, action) => {
      log.info('boardSlice.setArticleData START');
      state.article = action.payload.article;
      state.articleCommentList = action.payload.articleCommentList.commentList;
      log.debug('article 設定データ', state.article)
      log.debug('articleCommentList 設定データ',  state.articleCommentList)
      log.info('boardSlice.setArticleData END');
    },
    // ★ DB에서 postIndex를 가지고 post 취득
    setSelectSearchPostData: (state, action) => {
      //action.payload.postIndex (취득한 인덱스)
      state.post = selectPost;
    },
    // ★ DB에 +1 insert , 화면에 +1
    incrementLikeCount: (state, action) => {
      state.post.postLikeCount = state.post.postLikeCount + 1;
      
    },
    insertComment: (state, action) => {
      log.info('boardSlice.insertComment START');
      state.articleCommentList = action.payload.articleCommentList.commentList;
      log.debug('articleCommentList 設定データ',  state.articleCommentList)
      log.info('boardSlice.insertComment END');
      
    },
    insertContents: (state, action) => {
      log.info('boardSlice.insertContents START');
      state.article = action.payload.article;
      log.debug('Contents 設定データ',  state.articleCommentList)
      log.info('boardSlice.insertContents END');
      
    },
    // ★ DB에 +1 insert , 화면에 +1
    incrementCommentLikeCount: (state, action) => {
      state.post.comments[action.payload].commentLikeCount =
        state.post.comments[action.payload].commentLikeCount + 1;
      
    },
  },
});

export default boardSlice.reducer;
export const {
  setArticleData,
  incrementLikeCount,
  insertComment,
  incrementCommentLikeCount,
  setSelectSearchPostData,
  insertContents,
} = boardSlice.actions;
