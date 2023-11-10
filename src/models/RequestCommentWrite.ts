class RequestCommentWrite {
  //게시글 index
  private articleId: number | null;
  //코맨트 내용
  private comment: string | null;
  //게시글 카테고리 ID

  constructor(setData: any | null) {
    if (setData !== null) {
      this.articleId = setData[0];
      this.comment = setData[1];
    } else {
      this.articleId = null;
      this.comment = null;
    }
  }
}
export default RequestCommentWrite;
