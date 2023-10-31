import Comment from "./Comment";

class Post {
  constructor(
    private postIndex : number,
    private postTitle: number,
    private postWriter: number,
    private postType: number,
    private postViewCount: number,
    private postLikeCount: number,
    private postCommentCount: number,
    private postCoverImage: NodeRequire,
    private postContext: number,
    private postImageList: number[],
    private comments: Comment[],
  ) {
    this.postIndex = postIndex;
    this.postTitle = postTitle;
    this.postWriter = postWriter;
    this.postType = postType;
    this.postViewCount = postViewCount;
    this.postViewCount = postLikeCount;
    this.postCommentCount = postCommentCount;
    this.postCoverImage = postCoverImage;
    this.postContext = postContext;
    this.postImageList = [];
    this.comments = [];
  }
}
export default Post;
