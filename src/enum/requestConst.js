const HomeEnum = Object.freeze({
  //初期postデータ取得
  INIT_DATA: 'initData',
  //追加postデータ取得
  ADD_ARTICLE: 'addArticle',
});

const SearchEnum = Object.freeze({
  //初期postデータ取得
  INIT_DATA: 'initData',
  //追加postデータ取得
  ADD_ARTICLE: 'addArticle',
  //掲示板ネームで検索
  CATEGORY_SEARCH: 'categorySearch',
  //タイトルで検索
  TITLE_SEARCH: 'titleSearch',
  //ソートで検索
  SORT_SEARCH: 'sortSearch',

});

const WriteEnum = Object.freeze({
  //post登録
  CREATE_ARTICLE: 'createPost',

  CREATE_COMMENT: 'createComment',
  
});

const ReadEnum = Object.freeze({
  //post登録
  ARTICLE_READ: 'articleRead',

  COMMENT_READ: 'commentRead',
});

const RankEnum = Object.freeze({
  //初期postデータ取得
  INIT_DATA: 'intiData',
});

const ProfileEnum = Object.freeze({
  //作成したpost取得
  INIT_MY_POST: 'initMyPost',
  //作成したコメント取得
  INIT_MY_COMMENTS: 'initMyComment',
});

const BoardEnum = Object.freeze({
  //postのいいよクリック
  ARTICLE_LIKE: 'articleLike',
  //commentのいいよクリック
  COMMENT_LIKE: 'commentLike',
  //comment作成
  COMMENT_WRITE: 'commentWrite',
});

const LoginEnum = Object.freeze({
  //loginのボタンクリック
  LOGIN_PROCESS: 'loginProcess',
  //loginのボタンクリック
  LOGIN_CHECK: 'loginCheck',
});

export {
  HomeEnum,
  SearchEnum,
  WriteEnum,
  RankEnum,
  ProfileEnum,
  BoardEnum,
  LoginEnum,
  ReadEnum,
};
