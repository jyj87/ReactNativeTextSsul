import axios from 'axios';
import {BoardEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {getToken} from '../util/accessToken';
import {urlArticleLike,urlCommentLike} from '../util/urlQueryString';
import {log} from '../log/log_a';

/**
 * Board API
 *
 * @param {BoardEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const boardRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`,
    'Content-Type': 'application/json',
  };
  
  switch (type) {
    case BoardEnum.ARTICLE_LIKE:
      log.info('ArticleのLike処理 START');
      try {
        const url = urlArticleLike([requestData[0],requestData[1]]);
        const response = await axios.patch(url,null,{
            headers: headers,
          });
        log.debug('Article単一取得', response.data);
        log.info('ArticleのLike処理 END');
        return response.data.responseData;
      } catch (error) {
        throw error;
      }
      break;
      case BoardEnum.COMMENT_LIKE:
        log.info('CommentのLike処理 START');
        try {
          const url = urlCommentLike([requestData[0],requestData[1],requestData[2]]);
          const response = await axios.patch(url,null,{
              headers: headers,
            });
          log.debug('Comment(Article単一)取得', response.data);
          log.info('CommentのLike処理 END');
          return response.data.responseData;
        } catch (error) {
          throw error;
        }
        break;
    default:
      break;
  }
};
