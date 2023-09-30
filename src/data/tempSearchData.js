export const searchPostList = [
  {
    postSetIndex: 1,
    post1: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 1,
      postTitle: 'Post1',
      postCoverImage: require('../../assets/images/post1.jpeg'),
    },
    post2: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 2,
      postTitle: 'Post2',
      postCoverImage: require('../../assets/images/post2.jpeg'),
    },
    post3: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 3,
      postTitle: 'Post3',
      postCoverImage: require('../../assets/images/post3.jpeg'),
    },
  },
  {
    postSetIndex: 2,
    post1: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 4,
      postTitle: 'Post4',
      postCoverImage: require('../../assets/images/post4.jpeg'),
    },
    post2: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 5,
      postTitle: 'Post5',
      postCoverImage: require('../../assets/images/post5.jpeg'),
    },
    post3: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 6,
      postTitle: 'Post6',
      postCoverImage: require('../../assets/images/post6.jpeg'),
    },
  },
  {
    postSetIndex: 3,
    post1: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 7,
      postTitle: 'Post7',
      postCoverImage: require('../../assets/images/post7.jpeg'),
    },
    post2: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 8,
      postTitle: 'Post8',
      postCoverImage: require('../../assets/images/post8.jpeg'),
    },
    post3: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 9,
      postTitle: 'Post9',
      postCoverImage: require('../../assets/images/post9.jpeg'),
    },
  },
];

export const refreshTampSub3PostSet = [
  {
    postSetIndex: 4,
    post1: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 10,
      postTitle: 'Post10',
      postCoverImage: require('../../assets/images/post10.jpeg'),
    },
    post2: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 11,
      postTitle: 'Post11',
      postCoverImage: require('../../assets/images/post11.jpeg'),
    },
    post3: {
      postViewCount: 120,
      postLikeCount: 10,
      postCommentCount: 10,
      postIndex: 9,
      postTitle: 'Post12',
      postCoverImage: require('../../assets/images/post12.jpeg'),
    },
  },
];

export const selectPost = {
  postIndex: 1,
  postTitle: 'SearchViewSelectPost',
  postWriter: '변비엔당근',
  postType: '유머',
  postViewCount: 120,
  postLikeCount: 30,
  postCommentCount: 2,
  postImageList: null,
  postCoverImage: require('../../assets/images/post1.jpeg'),
  postContext:
    '내용입니다-------------------------------1\n' +
    '내용입니다-------------------------------1\n' +
    '내용입니다-------------------------------1\n' +
    '내용입니다-------------------------------1\n',
  comments: [
    {
      postIndex: 1,
      commentIndex: 1,
      commentWriter: '댓글작성자1',
      commentContext:
        '댓글입니다1-------------------------------1\n' +
        '댓글입니다1-------------------------------1\n',
      commentLikeCount: 10,
    },
    {
      postIndex: 1,
      commentIndex: 2,
      commentWriter: '댓글작성자1',
      commentContext:
        '댓글입니다1-------------------------------1\n' +
        '댓글입니다1-------------------------------1\n',
      commentLikeCount: 10,
    },
  ],
}
// 1 : 좋아요
// 2 : 조회수
// 3 : 최신글
// 4 : 댓글순 
export const sortFlag = 3;
