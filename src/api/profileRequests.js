import axios from 'axios';
import {ProfileEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {getToken, userInfo} from '../util/accessToken';
import {log} from '../log/log_a';


/**
 * Profile API
 *
 * @param {ProfileEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const profileRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`,
    'Content-Type': 'application/json',
  };

  switch (type) {
    case ProfileEnum.INIT_PROFILE:
      log.info('Member取得処理 START');
      try {
        const member = await userInfo();
        log.debug('Member取得', member);
        log.info('Member取得処理 END');
        return member;
      } catch (error) {
        throw error;
      }
      break;
    case ProfileEnum.INIT_MY_POST:
      try {
        const articleList = [];
        return articleList;
      } catch (error) {
        throw error;
      }
      break;
    case ProfileEnum.INIT_MY_COMMENTS:
      try {
        const commentList = [];
        return commentList;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
