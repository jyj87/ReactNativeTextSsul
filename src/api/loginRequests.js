import axios from 'axios';
import {LoginEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import RequestMember from '../models/RequestMember';
import {log} from '../log/log_a';
import {setToken, getToken} from '../util/accessToken';
import {isNullOrEmpty} from '../util/commonUtil';

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
        const member = new RequestMember(requestData);
        const response = await axios.post(GeneralEnum.BACK_END_LOGIN, member);
        log.debug('ログイン取得データ', response.data);
        setToken(response.data.responseData.accessToken);
      } catch (error) {
        throw error;
      }
      log.info('ログイン処理 END');
      break;
    case LoginEnum.LOGIN_CHECK:
      log.info('ログインチェック処理 START');
      try {
        //★ 로컬에 저장되어있는 토큰 여부 확인 -> 백엔드에서 정말 있는 토큰인가 확인 필요??
        const token = await getToken();
        return token === null ? false : true;
      } catch (error) {
        throw error;
      }
      log.info('ログインチェック処理 END');
      break;
    default:
      break;
  }
};
