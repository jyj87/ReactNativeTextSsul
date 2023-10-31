class Search {
  /**
   * @param searchType 검색 조건 작성자:author, 제목: title, 카테고리: category
   * @param searchContent 검색 조건에 따른 검색어
   */
  constructor(
    private searchType: string | null,
    private searchContent: string | null,
  ) {
    this.searchType = searchType;
    this.searchContent = searchContent;
  }
}
export default Search;
