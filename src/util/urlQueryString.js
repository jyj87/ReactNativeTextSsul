import queryString from 'query-string';
import {log} from '../log/log_a';

// BASE URL + PARAMS
export const setUrl = (apiUrl, params) => {
  const addQuery = {page: params[0], limit: params[1], categoryId: params[2]};

  const url = queryString.stringifyUrl({
    url: apiUrl,
    query: addQuery,
  });
  log.debug('SET URL : ', url);
  return url;
};

// BASE Comment Version
export const setUrlComment = (articleNumber) => {
  const url = `http://localhost:8080/v1/api/articles/${articleNumber}/comments`;
  log.debug('SET URL COMMENT: ', url);
  return url;
};
