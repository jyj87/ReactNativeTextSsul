class Comment {
  constructor(
    private postIndex: number,
    private commentIndex: number,
    private commentWriter: number,
    private commentContext: number,
    private commentLikeCount: number,
  ) {
    this.postIndex = postIndex;
    this.commentIndex = commentIndex;
    this.commentWriter = commentWriter;
    this.commentContext = commentContext;
    this.commentLikeCount = commentLikeCount;
  }
}
export default Comment;
