import queryString from 'query-string';
import {log} from '../log/log_a';

// URL + PARAMS
export const setUrl = (apiUrl, params) => {
  // parameterをURLに追加
  const url = new URL(apiUrl);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return url.toString();
};
