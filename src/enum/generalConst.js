const Path_IOS = 'http://localhost:8080/';
const Path_ANDROID = 'http://10.0.2.2:8080/';
const Path_BASE = Path_IOS;

const GeneralEnum = Object.freeze({
  BACK_END_LOGIN: Path_BASE + 'v1/api/members/login',
  BACK_END_WRITE: Path_BASE + 'v1/api/articles',

  BACK_END_GET_HOME_ARTICLES: Path_BASE + 'v1/api/articles',
  BACK_END_GET_HOME_ARTICLE: Path_BASE + 'v1/api/articles/',

  BACK_END_GET_SEARCH_ARTICLES: Path_BASE + 'v1/api/articles',
  BACK_END_GET_RANK_ARTICLES: Path_BASE + 'v1/api/articles',

  VALIDATION_CHECK_ARTICLE: 'articleCheck',
  VALIDATION_CHECK_COMMENT: 'articleComment',
});

export {GeneralEnum};
