import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_a';

/**
 * login: memberデータを取得
 * loginOut:ローグアウト処理
 */
const loginSlice = createSlice({
  name: 'login',
  initialState: {member: {}, loginFlag: false},
  reducers: {
    init: (state, action) => {},
    loginCheck: (state, action) => {
      log.info('ログインフラグ更新処理 START');
      state.loginFlag = action.payload;
      log.debug('ログインフラグ', state.loginFlag);
      log.info('ログインフラグ更新処理 END');
    },
    login: (state, action) => {
      log.info('ログイン処理 START');
      state.loginFlag = action.payload;
      log.debug('ログインフラグ', state.loginFlag);
      log.info('ログイン処理 END');
    },
    loginOut: (state, action) => {
      log.info('ログインアウト処理 START');
      state.loginFlag = false;
      log.debug('ログインフラグ', state.loginFlag);
      log.info('ログインアウト処理 END');
    },
  },
});

export default loginSlice.reducer;
export const {login, loginOut, init, loginCheck} = loginSlice.actions;
