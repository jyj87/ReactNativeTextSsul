class RequestMember {
    private email: string | null;
    private password: string | null;

    constructor(memberData: any | null) {
      if(memberData !== null){
          this.email = memberData[0];
          this.password = memberData[1];
      } else {
          this.email = null;
          this.password = null;
      }
    }
  }
  export default RequestMember;
  