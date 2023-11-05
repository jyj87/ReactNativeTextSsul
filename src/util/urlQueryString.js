import queryString from 'query-string';
import {log} from '../log/log_a';

// URL + PARAMS
export const setUrl = (apiUrl, params) => {
  const addQuery = {page: params[0], limit: params[1], categoryId: params[2]};

  const url = queryString.stringifyUrl({
    url: apiUrl,
    query: addQuery,
  });
  log.debug('SET URL : ', url)
  return url;
};
