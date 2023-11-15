import queryString from 'query-string';
import {log} from '../log/log_a';

// BASE URL + PARAMS
export const setUrl = (apiUrl, params) => {
  const addQuery = {page: params[0], limit: params[1], categoryId: params[2],orderType:params[3]};

  const url = queryString.stringifyUrl({
    url: apiUrl,
    query: addQuery,
  });
  log.debug('SET URL : ', url);
  return url;
};

// Comment Select
export const urlCommentSelect = (articleNumber) => {
  const url = `http://localhost:8080/v1/api/articles/${articleNumber}/comments`;
  log.debug('Comment Select URL : ', url);
  return url;
};

// Comment Insert
export const urlCommentInsert = (articleNumber) => {
  const url = `http://localhost:8080/v1/api/articles/${articleNumber}/comments`;
  log.debug('Comment Insert URL : ', url);
  return url;
};

// Article Like
export const urlArticleLike = (params) => {
  const url = `http://localhost:8080/v1/api/articles/${params[0]}/${params[1]}`;
  log.debug('Article Like URL : ', url);
  return url;
};

// Search Text
export const urlSearchTextExist = (params) => {
  const url = `http://localhost:8080/v1/api/articles?page=${params[0]}&limit=${params[1]}&articleTitle=${params[2]}&orderType=${params[3]}`;
  log.debug('Search Text URL : ', url);
  return url;
};
