import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_c';

/**
 * initPost: Post 기본 틀 Entity
 */
const initPost = {
  postIndex: null,
  postTitle: null,
  postWriter: null,
  postType: null,
  postViewCount: null,
  postLikeCount: null,
  postCommentCount: null,
  postImageList: null,
  postCoverImage: null,
  postContext: null,
  comments: [],
};

/**
 * setPostData: 선택한 Post를 화면에 출력하기 위해 세팅
 * incrementLikeCount: 좋아요 + 1 증가
 * insertCommentText: 코맨트 등록
 * incrementCommentLikeCount: 코맨트 좋아요 + 1 증가
 */
const boardSlice = createSlice({
  name: 'board',
  initialState: {post: initPost},
  reducers: {
    setPostData: (state, action) => {
      log.info('boardSlice : setPostData\n', action.payload.postData);
      state.post = action.payload.postData;
    },
    // ★ DB에 +1 insert , 화면에 +1
    incrementLikeCount: (state, action) => {
      log.info('boardSlice : incrementLikeCount\n', ' + Like');
      state.post.postLikeCount = state.post.postLikeCount + 1;
    },
    // ★ DB에 +text insert, 화면에+text
    insertCommentText: (state, action) => {
      log.info('boardSlice : insertCommentText\n', action.payload);
      state.post.comments.push({
        postIndex: 8,
        commentIndex: 8,
        commentWriter: '추가한 사람',
        commentContext: action.payload,
        commentLikeCount: 10,
      });
    },
    // ★ DB에 +1 insert , 화면에 +1
    incrementCommentLikeCount: (state, action) => {
      log.info('boardSlice : incrementCommentLikeCount\n', ' + Like');
      state.post.comments[action.payload].commentLikeCount =
        state.post.comments[action.payload].commentLikeCount + 1;
    },
  },
});

export default boardSlice.reducer;
export const {
  setPostData,
  incrementLikeCount,
  insertCommentText,
  incrementCommentLikeCount,
} = boardSlice.actions;
