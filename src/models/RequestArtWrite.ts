class RequestArtWrite {
  //게시글 제목
  private articleTitle: string | null;
  //작성자 ID
  private authorUid: string | null;
  //게시글 카테고리 ID
  private categoryId: string | null;
  //게시글 종류 ID
  private articleTypeId: string | null;
  //본문 내용
  private articleContent: string | null;
  //본문 이미지
  private imageIdList: number[] | [];

  constructor(setData: any | null) {
    if (setData !== null) {
      this.articleTitle = setData[0];
      this.authorUid = setData[1];
      this.categoryId = setData[2];
      this.articleTypeId = setData[3];
      this.articleContent = setData[4];
      this.imageIdList = [5];
    } else {
      this.articleTitle = null;
      this.authorUid = null;
      this.categoryId = null;
      this.articleTypeId = null;
      this.articleContent = null;
      this.imageIdList = [];
    }
  }
}
export default RequestArtWrite;
