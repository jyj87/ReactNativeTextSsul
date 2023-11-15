import {createSlice} from '@reduxjs/toolkit';

/**
 * insertPost: 작성한 게시글을 DB에 저장
 */
const writeSlice = createSlice({
  name: 'write',
  initialState: {registerPost: {}},
  reducers: {

    insertPost: (state, action) => {

      //현재 사용처 없음
    },
  },
});

export default writeSlice.reducer;
export const {insertPost} = writeSlice.actions;
