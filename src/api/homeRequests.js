import axios from 'axios';
import {HomeEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {setUrl} from '../util/urlQueryString';
import {testRandomImagePath} from '../util/testUtil';
import {log} from '../log/log_a';

/**
 * HomeEnum.INIT_DATA : 初期HOME画面データ取得
 * 
 * 
 */
export const homeRequests = async type => {
  switch (type) {
    case HomeEnum.INIT_DATA:
      log.info('HOME画面のINIT処理 START');
      try {
        const url = setUrl(GeneralEnum.BACK_END_POST_SELECT, ['1', '10', '1']);
        const response = await axios.get(url);
        const articleList = [];
        response.data.responseData.articleList.forEach(element => {
          element.thumbnailImagePath = testRandomImagePath();
          articleList.push(element);
        });
        log.debug('HOME画面のINITデータ取得', articleList);
        return articleList;
      } catch (error) {
        throw error;
      }
      log.info('HOME画面のINIT処理 END');
      break;
    case HomeEnum.ADD_POST:
      try {

      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
