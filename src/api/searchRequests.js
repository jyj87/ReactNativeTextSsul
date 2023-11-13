import axios from 'axios';
import {SearchEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {setUrl, urlSearchTextExist} from '../util/urlQueryString';
import {log} from '../log/log_a';
import {testRandomImagePath} from '../util/testUtil';
import {isNullOrEmpty, changeSortCode} from '../util/commonUtil';

export const searchRequests = async (type, requestData) => {
  switch (type) {
    case SearchEnum.INIT_DATA:
      log.info('Search画面のINIT処理 START');
      try {
        const url = setUrl(GeneralEnum.BACK_END_GET_SEARCH_ARTICLES, [
          '0',
          '9',
          '1',
          'date',
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
    case SearchEnum.ADD_ARTICLE:
      log.info('Search画面のADD処理 START');
      try {
        let url;
        // base
        if (isNullOrEmpty(requestData[1])) {
          url = setUrl(GeneralEnum.BACK_END_GET_SEARCH_ARTICLES, [
            String(requestData[0] + 1),
            '9',
            '1',
            changeSortCode(requestData[2])
          ]);
          // 検索語がある場合
        } else {
          url = urlSearchTextExist([
            String(requestData[0] + 1),
            '9',
            requestData[1],
            changeSortCode(requestData[2])
          ]);
        }

        const response = await axios.get(url);
        const responseArticlesList = response.data.responseData.articleList;
        const articlesList = [];
        if (responseArticlesList.length !== 0) {
          for (var i = 0; i < 3; i++) {
            const articles = []; // 내부 배열 생성
            for (var j = 0; j < 3; j++) {
              if (responseArticlesList[i * 3 + j] === undefined) {
                articles.push({
                  thumbnailImagePath: null,
                  articleId: '',
                  articleTitle: '',
                }); // 각 요소를 채워넣음
              } else {
                responseArticlesList[i * 3 + j].thumbnailImagePath =
                  testRandomImagePath();
                articles.push(responseArticlesList[i * 3 + j]); // 각 요소를 채워넣음
              }
            }
            articlesList.push(articles); // 외부 배열에 내부 배열 추가
          }
        }
        log.debug('Search画面のADDデータ取得', articlesList);
        log.info('Search画面のADD処理 END');
        return articlesList;
      } catch (error) {
        throw error;
      }
      break;
    case SearchEnum.TITLE_SEARCH:
      log.info('Title Search処理 START');
      try {
        const url = urlSearchTextExist([
          String(requestData[0]),
          '9',
          requestData[1],
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
        log.debug('Title Searchデータ取得', articlesList);
        log.info('Title Search処理 END');
        return articlesList;
      } catch (error) {
        throw error;
      }
      break;

    default:
      break;
  }
};
