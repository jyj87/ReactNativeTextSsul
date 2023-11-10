const HomeEnum = Object.freeze({
  //初期postデータ取得
  INIT_DATA: 'initData',
  //追加postデータ取得
  ADD_POST: 'addPost',
});

const SearchEnum = Object.freeze({
  //初期postデータ取得
  INIT_DATA: 'initData',
  //追加postデータ取得
  ADD_POST: 'addPost',
  //掲示板ネームで検索
  CATEGORY_SEARCH: 'categorySearch',
  //タイトルで検索
  TITLE_SEARCH: 'titleSearch',
  //いいよ順で検索
  LIKE_SORT: 'likeSort',
  //再生数順で検検索
  HITS_SORT: 'hitSort',
  //最新順で検索
  LATEST_SORT: 'latestSort',
  //コメント数順で検索
  COMMENT_SORT: 'commentSort',
});

const WriteEnum = Object.freeze({
  //post登録
  CREATE_ARTICLE: 'createPost',

  CREATE_COMMENT: 'createComment',

  ARTICLE_LIKE:'ArticleLike'
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
  POST_LIKE: 'postLike',
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
