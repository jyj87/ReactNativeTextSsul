import axios from 'axios';
import {RankEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {setUrl} from '../util/urlQueryString';
import {log} from '../log/log_a';
import {testRandomImagePath} from '../util/testUtil';

export const rankRequests = async (type, requestData) => {
  switch (type) {
    case RankEnum.INIT_DATA:
      log.info('Rank画面のINIT処理 START');
      try {
        const main0url = setUrl(GeneralEnum.BACK_END_GET_RANK_ARTICLES, [
          '0',
          '1',
          '1',
          'viewCnt',
        ]);
        const sub1url = setUrl(GeneralEnum.BACK_END_GET_RANK_ARTICLES, [
          '0',
          '10',
          '1',
          'viewCnt',
        ]);
        const sub2url = setUrl(GeneralEnum.BACK_END_GET_RANK_ARTICLES, [
          '0',
          '10',
          '2',
          'viewCnt',
        ]);
        const sub3url = setUrl(GeneralEnum.BACK_END_GET_RANK_ARTICLES, [
          '0',
          '10',
          '3',
          'viewCnt',
        ]);
        const mainArticle = await axios.get(main0url);
        const articles1 = await axios.get(sub1url);
        const articles2 = await axios.get(sub2url);
        const articles3 = await axios.get(sub3url);
        rankArticleList.mainArticle = mainArticle.data.responseData.articleList
        rankArticleList.subArticleList1 = articles1.data.responseData.articleList
        rankArticleList.subArticleList2 = articles2.data.responseData.articleList
        rankArticleList.subArticleList3 = articles3.data.responseData.articleList
        rankArticleList.mainArticle.forEach(element => {
          element.thumbnailImagePath = testRandomImagePath();
        });
        rankArticleList.subArticleList1.forEach(element => {
          element.thumbnailImagePath = testRandomImagePath();
        });
        rankArticleList.subArticleList2.forEach(element => {
          element.thumbnailImagePath = testRandomImagePath();
        });
        rankArticleList.subArticleList3.forEach(element => {
          element.thumbnailImagePath = testRandomImagePath();
        });
        
        log.debug('Rank取得', rankArticleList);
        log.info('Rank画面のINIT処理 END');
        return rankArticleList
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};

const rankArticleList = {
  mainArticle: [],
  subArticleList1: [],
  subArticleList2: [],
  subArticleList3: [],
}
