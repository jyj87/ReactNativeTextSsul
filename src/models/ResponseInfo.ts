class ResponseInfo {
  constructor(
    private responseCode: number | null,
    private responseMsg: string | null,
  ) {
    this.responseCode = responseCode;
    this.responseMsg = responseMsg;
  }
}
export default ResponseInfo;
