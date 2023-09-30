import {createSlice} from '@reduxjs/toolkit';
import {log, logInfoReducer} from '../log/log_c';
import {
  selectPost
} from '../data/tempSearchData';

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
      const requestViewName = action.payload.requestView
      const postIndex = action.payload.postIndex
      if("Home" === requestViewName ){
        state.post = action.payload.postData;
      } else if("Search" === requestViewName){
        //DB에서 취득후 셋팅 필요 (게시물 인덱스 postIndex)
        state.post = selectPost;
      }
 
      //react logs 에러  (라이브러리 변경 추천 검색해서 확인)
      // logInfoReducer('boardSlice', 'setPostData', 'requestViewName', requestViewName);
      // logInfoReducer('boardSlice', 'setPostData', 'post', state.post);
    },
     // ★ DB에 +1 insert , 화면에 +1
    setSearchPostData: (state, action) => {
      state.post = selectPost;
      console.log(state.post);
      logInfoReducer('boardSlice', 'setSearchPostData', 'postIndex', action.payload);
      // logInfoReducer('boardSlice', 'setSearchPostData', 'post', state.post);
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
        commentContext: action.payload,
        commentLikeCount: 10,
      });
      logInfoReducer(
        'boardSlice',
        'insertCommentText',
        'insertCommentTextParam',
        action.payload,
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
  setSearchPostData,
} = boardSlice.actions;
