import {createSlice} from '@reduxjs/toolkit';

/**
 * changeEditFlag: 修正画面編集Flag更新
 */
const writeSlice = createSlice({
  name: 'write',
  initialState: {editFlag: false},
  reducers: {

    changeEditFlag: (state, action) => {
      state.editFlag = action.payload
    },
  },
});

export default writeSlice.reducer;
export const {changeEditFlag} = writeSlice.actions;
