class Article {
  private articleId: number | null;
  private articleTitle: string | null;
  private authorUid: number | null;
  private authorNick: string | null;
  private categoryId: number | null;
  private categoryNm: string | null;
  private articleTypeId: number | null;
  private articleTypeNm: string | null;
  private viewCnt: number | null;
  private likeCnt: number | null;
  private commentCnt: number | null;
  private thumbnailImageId: number | null;
  private thumbnailImage: string | null;
  constructor(articleData: any | null) {
    if(articleData !== null){
        this.articleId = articleData.articleId;
        this.articleTitle = articleData.articleTitle;
        this.authorUid = articleData.authorUid;
        this.authorNick = articleData.authorNick;
        this.categoryId = articleData.categoryId;
        this.categoryNm = articleData.categoryNm;
        this.articleTypeId = articleData.articleTypeId;
        this.articleTypeNm = articleData.articleTypeNm;
        this.viewCnt = articleData.viewCnt;
        this.likeCnt = articleData.likeCnt;
        this.commentCnt = articleData.commentCnt;
        this.thumbnailImageId = articleData.thumbnailImageId;
        this.thumbnailImage = articleData.thumbnailImage;
    } else {
        this.articleId = null;
        this.articleTitle = null;
        this.authorUid = null;
        this.authorNick = null;
        this.categoryId = null;
        this.categoryNm = null;
        this.articleTypeId = null;
        this.articleTypeNm = null;
        this.viewCnt = null;
        this.likeCnt = null;
        this.commentCnt = null;
        this.thumbnailImageId = null;
        this.thumbnailImage = null;
    }

  }
}
export default Article;
