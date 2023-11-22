import axios from 'axios';
import {WriteEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import RequestArtWrite from '../models/RequestArtWrite';
import {getToken} from '../util/accessToken';
import {log} from '../log/log_a';
import RequestCommentWrite from '../models/RequestCommentWrite';
import {urlCommentInsert, urlArticleUpdate} from '../util/urlQueryString';

/**
 * Write API
 *
 * @param {WriteEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const writeRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`,
    'Content-Type': 'application/json',
  };

  switch (type) {
    case WriteEnum.CREATE_ARTICLE:
      log.info('Article作成処理 START');
      try {
        const data = new RequestArtWrite(requestData);
        log.debug('Article登録データ', data);
        const response = await axios.post(GeneralEnum.BACK_END_WRITE, data, {
          headers: headers,
        });
      } catch (error) {
        throw error;
      }
      log.info('Article作成処理 END');
      break;
    case WriteEnum.CREATE_COMMENT:
      log.info('Comment作成処理 START');
      try {
        const url = urlCommentInsert(requestData[0]);
        const data = new RequestCommentWrite(requestData);
        log.debug('Comment登録データ', data);
        const response = await axios.post(url, data, {
          headers: headers,
        });
      } catch (error) {
        throw error;
      }
      log.info('Comment作成処理 END');
      break;
    case WriteEnum.UPDATE_ARTICLE:
      log.info('Article修正処理 START');
      try {
        console.log(requestData)
        const url = urlArticleUpdate(requestData[5]);
        const data = new RequestArtWrite(requestData);
        log.debug('Article修正データ', data);
        const response = await axios.patch(url, data, {
          headers: headers,
        });
      } catch (error) {
        throw error;
      }
      log.info('Article修正処理 END');
      break;
    default:
      break;
  }
};
