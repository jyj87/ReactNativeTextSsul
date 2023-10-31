import Article from './Article';

class ResponseData {
  private articleList: Article[] = [];

  addArticle(entity: Article): void {
    this.articleList.push(entity);
  }

  getArticle(index: number): Article {
    return this.articleList[index];
  }
  
  getArticleList(): Article[] {
    return this.articleList;
  }
}
export default ResponseData;
