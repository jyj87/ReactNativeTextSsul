import Search from './Search';

class GetPostRequest {
  /**
   * @param searchList 검색 조건
   * @param offset 게시글 목록 시작지점 (기본값: 0)
   * @param order 게시글 정렬 순서 (오름차순: asc, 내림차순:desc) (기본값:asc)
   * @param limit 한 페이지에 가져올 게시글 최대 수 (기본값: 10, 최대: 100)
   */
  constructor(
    private searchList: Search[],
    private offset: number | null,
    private order: string | null,
    private limit: number | null,
  ) {
    this.searchList = [];
    this.offset = offset;
    this.order = order;
    this.limit = limit;
  }

  addSearch(entity: Search): void {
    this.searchList.push(entity);
  }
}
export default GetPostRequest;
