import axios from 'axios';
import {DeleteEnum} from '../enum/requestConst';
import {getToken} from '../util/accessToken';
import {log} from '../log/log_a';
import {urlArticleDelete} from '../util/urlQueryString';

/**
 * Delete API
 *
 * @param {DeleteEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const deleteRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`,
    'Content-Type': 'application/json',
  };

  switch (type) {
    case DeleteEnum.DELETE_ARTICLE:
      log.info('Article削除処理 START');
      try {
        const url = urlArticleDelete(requestData);
        log.debug('Article削除URL', url);
        const response = await axios.delete(url, {
          headers: headers,
        });
      } catch (error) {
        throw error;
      }
      log.info('Article削除処理 END');
      break;
    default:
      break;
  }
};
