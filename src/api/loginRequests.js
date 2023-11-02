import axios from 'axios';
import {LoginEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import Member from '../models/Member';
import {log} from '../log/log_a';
import {setToken, getToken} from '../util/accessToken';

/**
 * Login API
 *
 * @param {LoginEnum} type  - 処理区分
 * @param {any} requestData - 転送データ
 */
export const loginRequests = async (type, requestData) => {
  switch (type) {
    //ログイン処理　→ Token取得
    case LoginEnum.LOGIN_PROCESS:
      log.info('ログイン処理 START');
      try {
        const member = new Member(requestData);
        const response = await axios.post(GeneralEnum.BACK_END_LOGIN, member);
        log.debug('ログイン取得データ', response.data);
        setToken(response.data.responseData.accessToken);
      } catch (error) {
        throw error;
      }
      log.info('ログイン処理 END');
      break;
    default:
      break;
  }
};
