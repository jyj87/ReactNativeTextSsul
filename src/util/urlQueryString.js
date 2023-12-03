import queryString from 'query-string';
import {log} from '../log/log_a';

const Path_IOS = 'http://localhost:8080/';
const Path_ANDROID = 'http://10.0.2.2:8080/';
const Path_BASE = Path_IOS;

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
  const url = Path_BASE +`v1/api/articles/${articleNumber}/comments`;
  log.debug('Comment Select URL : ', url);
  return url;
};

// Comment Insert
export const urlCommentInsert = (articleNumber) => {
  const url = Path_BASE +`v1/api/articles/${articleNumber}/comments`;
  log.debug('Comment Insert URL : ', url);
  return url;
};

// Article Like
export const urlArticleLike = (params) => {
  const url = Path_BASE +`v1/api/articles/${params[0]}/${params[1]}`;
  log.debug('Article Like URL : ', url);
  return url;
};

// Comment Like
export const urlCommentLike = (params) => {
  const url = Path_BASE +`v1/api/articles/${params[0]}/${params[1]}/${params[2]}`;
  log.debug('Comment Like URL : ', url);
  return url;
};

// Search Text
export const urlSearchTextExist = (params) => {
  const url = Path_BASE +`v1/api/articles?page=${params[0]}&limit=${params[1]}&articleTitle=${params[2]}&orderType=${params[3]}`;
  log.debug('Search Text URL : ', url);
  return url;
};

// User Articles Select
export const urlUserArticlesSelect = (params) => {
  const url = Path_BASE +`v1/api/articles?page=0&limit=9999&authorUid=${params[0]}`;
  log.debug('User Articles Select URL : ', url);
  return url;
};

// User Articles Delete
export const urlArticleDelete = (params) => {
  const url = Path_BASE +`v1/api/articles/${params[0]}`;
  log.debug('Articles Delete URL : ', url);
  return url;
};

// Articles Update
export const urlArticleUpdate = (params) => {
  const url = Path_BASE +`v1/api/articles/${params}`;
  log.debug('Articles Update URL : ', url);
  return url;
};

// Image UpLoad
export const urlImageUpLoad = (params) => {
  const url = Path_BASE +`v1/api/images`;
  log.debug('Image UpLoad URL : ', url);
  return url;
};

// Image Select
export const urlImageSelect = (params) => {
  const url = Path_BASE +`v1/api/images/${params}`;
  log.debug('Image Select URL : ', url);
  return url;
};

