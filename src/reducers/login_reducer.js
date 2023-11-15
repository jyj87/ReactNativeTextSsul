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
      log.info('loginSlice.loginCheck START');
      state.loginFlag = action.payload;
      log.debug('ログインフラグ', state.loginFlag);
      log.info('loginSlice.loginCheck END');
    },
    login: (state, action) => {
      log.info('loginSlice.login START');
      state.loginFlag = action.payload;
      log.debug('ログインフラグ', state.loginFlag);
      log.info('loginSlice.login END');
    },
    loginOut: (state, action) => {
      log.info('loginSlice.loginOut START');
      state.loginFlag = false;
      log.debug('ログインフラグ', state.loginFlag);
      log.info('loginSlice.loginOut END');
    },
  },
});

export default loginSlice.reducer;
export const {login, loginOut, init, loginCheck} = loginSlice.actions;
