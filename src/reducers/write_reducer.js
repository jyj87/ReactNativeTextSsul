import {createSlice} from '@reduxjs/toolkit';
import {log, logInfoReducer} from '../log/log_c';

/**
 * insertPost: 작성한 게시글을 DB에 저장
 */
const writeSlice = createSlice({
  name: 'write',
  initialState: {registerPost: {}},
  reducers: {
    /**
     * insertData[0]:title
     * insertData[1]:context
     * insertData[2]:selectedBoardTypeValue
     * insertData[3]:selectedHashTypeValue
     * insertData[4]:selectedPhoto
     */
    insertPost: (state, action) => {
      // DB 등록 처리 추가 필요
      console.log("title",action.payload.insertData[0]);
      console.log("context",action.payload.insertData[1]);
      console.log("selectedBoardTypeValue",action.payload.insertData[2]);
      console.log("selectedHashTypeValue",action.payload.insertData[3]);
      console.log("selectedPhoto",action.payload.insertData[4]);
    },
  },
});

export default writeSlice.reducer;
export const {insertPost} = writeSlice.actions;
