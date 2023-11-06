import axios from 'axios';
import {ReadEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {getToken} from '../util/accessToken';
import {setUrlComment} from '../util/urlQueryString';
import {log} from '../log/log_a';

/**
 * Read API
 *
 * @param {ReadEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const readRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`,
    'Content-Type': 'application/json',
  };

  switch (type) {
    case ReadEnum.ARTICLE_READ:
      log.info('Article単一取得処理 START');
      try {
        const response = await axios.get(
          GeneralEnum.BACK_END_GET_HOME_ARTICLE + requestData,
        );
        log.debug('Article単一取得', response.data);
        log.info('Article単一取得処理 END');
        return response.data.responseData;
      } catch (error) {
        throw error;
      }
      break;
    case ReadEnum.COMMENT_READ:
      log.info('Comment取得処理 START');
      try {
        const url = setUrlComment(requestData);
        const response = await axios.get(url);
        log.debug('Comment取得', response.data);
        log.info('Comment取得処理 END');
        return response.data.responseData;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
