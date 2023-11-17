import axios from 'axios';
import {HomeEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {setUrl} from '../util/urlQueryString';
import {testRandomImagePath} from '../util/testUtil';
import {log} from '../log/log_a';
import { getToken } from '../util/accessToken';

/**
 * Home API
 *
 * @param {HomeEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const homeRequests = async (type, requestData) => {
    // headers設定
    const headers = {
      Authorization: `Bearer ${await getToken()}`,
      'Content-Type': 'application/json',
    };
    
  switch (type) {
    case HomeEnum.INIT_DATA:
      log.info('HOME画面のINIT処理 START');
      try {
        const url = setUrl(GeneralEnum.BACK_END_GET_HOME_ARTICLES, [
          '0',
          '10',
          '1',
          'date',
        ]);
        const response = await axios.get(url,null,{
          headers: headers,
        });
        const articleList = [];
        response.data.responseData.articleList.forEach(element => {
          element.thumbnailImagePath = testRandomImagePath();
          articleList.push(element);
        });
        log.debug('HOME画面のINITデータ取得', articleList);
        log.info('HOME画面のINIT処理 END');
        return articleList;
      } catch (error) {
        throw error;
      }
      break;
    case HomeEnum.ADD_ARTICLE:
      log.info('HOME画面のARTICLE追加処理 START');
      try {
        const url = setUrl(GeneralEnum.BACK_END_GET_HOME_ARTICLES, [
          String(requestData + 1),
          '10',
          '1',
          'date',
        ]);
        const response = await axios.get(url,null,{
          headers: headers,
        });
        const articleList = [];
        response.data.responseData.articleList.forEach(element => {
          element.thumbnailImagePath = testRandomImagePath();
          articleList.push(element);
        });
        log.debug('HOME画面のARTICLE追加データ取得', articleList);
        log.info('HOME画面のARTICLE追加処理 END');
        return articleList;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
