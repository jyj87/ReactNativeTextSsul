import {createSlice} from '@reduxjs/toolkit';
import {log, logInfoReducer} from '../log/log_c';
import {selectPost, initBoardPost} from '../data/tempSearchData';

/**
 * initPost: Post 기본 틀 Entity
 */
const initPost = initBoardPost;

/**
 * setPostData: 선택한 Post를 화면에 출력하기 위해 세팅
 * setSelectSearchPostData : Search View에서 선택한 Post 화면에 출력하기 위해 세팅
 * incrementLikeCount: 좋아요 + 1 증가
 * insertCommentText: 코맨트 등록
 * incrementCommentLikeCount: 코맨트 좋아요 + 1 증가
 */
const boardSlice = createSlice({
  name: 'board',
  initialState: {post: initPost},
  reducers: {
    setPostData: (state, action) => {
      state.post = action.payload.postData;
      logInfoReducer(
        'boardSlice',
        'setPostData',
        'postData',
        state.post,
      );
    },
    // ★ DB에서 postIndex를 가지고 post 취득
    setSelectSearchPostData: (state, action) => {
      //action.payload.postIndex (취득한 인덱스)
      state.post = selectPost;
      logInfoReducer(
        'boardSlice',
        'setSelectSearchPostData',
        'postIndex',
        action.payload.postIndex,
      );
    },
    // ★ DB에 +1 insert , 화면에 +1
    incrementLikeCount: (state, action) => {
      state.post.postLikeCount = state.post.postLikeCount + 1;
      logInfoReducer(
        'boardSlice',
        'incrementLikeCount',
        'postLikeCount',
        state.post.postLikeCount,
      );
    },
    // ★ DB에 +text insert, 화면에+text
    insertCommentText: (state, action) => {
      state.post.comments.push({
        postIndex: 8,
        commentIndex: 8,
        commentWriter: '추가한 사람',
        commentContext: action.payload.commentText,
        commentLikeCount: 10,
      });
      logInfoReducer(
        'boardSlice',
        'insertCommentText',
        'insertCommentTextParam',
        action.payload.commentText
      );
    },
    // ★ DB에 +1 insert , 화면에 +1
    incrementCommentLikeCount: (state, action) => {
      state.post.comments[action.payload].commentLikeCount =
        state.post.comments[action.payload].commentLikeCount + 1;
      logInfoReducer(
        'boardSlice',
        'incrementCommentLikeCount',
        'commentLikeCount',
        state.post.comments[action.payload].commentLikeCount,
      );
    },
  },
});

export default boardSlice.reducer;
export const {
  setPostData,
  incrementLikeCount,
  insertCommentText,
  incrementCommentLikeCount,
  setSelectSearchPostData,
} = boardSlice.actions;
