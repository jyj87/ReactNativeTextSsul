import axios from 'axios';
import {SearchEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {setUrl} from '../util/urlQueryString';
import {log} from '../log/log_a';
import {testRandomImagePath} from '../util/testUtil';

export const searchRequests = async type => {
  switch (type) {
    case SearchEnum.INIT_DATA:
      log.info('Search画面のINIT処理 START');
      try {
        const url = setUrl(GeneralEnum.BACK_END_GET_SEARCH_ARTICLES, [
          '0',
          '9',
          '1',
        ]);
        const response = await axios.get(url);
        const responseArticlesList = response.data.responseData.articleList;
        const articlesList = [];
        for (var i = 0; i < 3; i++) {
          const articles = []; // 내부 배열 생성
          for (var j = 0; j < 3; j++) {
            responseArticlesList[i * 3 + j].thumbnailImagePath =
              testRandomImagePath();
            articles.push(responseArticlesList[i * 3 + j]); // 각 요소를 채워넣음
          }
          articlesList.push(articles); // 외부 배열에 내부 배열 추가
        }
        log.debug('Search画面のINITデータ取得', articlesList);
        log.info('Search画面のINIT処理 END');
        return articlesList;
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.ADD_POST:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.CATEGORY_SEARCH:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.TITLE_SEARCH:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.LIKE_SORT:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.HITS_SORT:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.LATEST_SORT:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.COMMENT_SORT:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
