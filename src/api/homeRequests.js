import axios from 'axios';
import {HomeEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import Article from '../models/Article';

export const homeRequests = async type => {
  switch (type) {
    case HomeEnum.INIT_DATA:
      //mainPost
      //rankPost
      //searchPost
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL1 + 'articles');
        const articleList = [];
        response.data.responseData.articleList.forEach(element => {
          articleList.push(new Article(element));
        });
        console.log(articleList[0].articleTitle);
        console.log(articleList[1].articleTitle);
      } catch (error) {
        throw error;
      }
      break;
    case HomeEnum.ADD_POST:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
//Objectを直劣化
const getObjectUrl = object => {
  const serializedObject = JSON.stringify(object);
  const encodedObject = encodeURIComponent(serializedObject);
  const baseUrl = GeneralEnum.BACK_END_URL1
  const url = `${baseUrl}/endpoint?data=${encodedObject}`;
  return url;
};

//参照　backAnd
// @RestController
// public class MyController {
//     @GetMapping("/endpoint")
//     public MyObject handleRequest(@RequestParam("data") String encodedObject) {
//         // URL에서 쿼리 파라미터를 가져옴

//         // URL 디코딩: JSON 문자열을 복원
//         String jsonString = URLDecoder.decode(encodedObject, StandardCharsets.UTF_8);

//         // JSON 문자열을 클래스 객체로 역직렬화
//         MyObject myObject = new ObjectMapper().readValue(jsonString, MyObject.class);

//         // myObject를 사용하여 작업 수행
//         // ...
//         return myObject;
//     }
// }
// 위의 코드에서 MyController는 GET 요청을 처리하고, URL의 data 쿼리 파라미터에서 인코딩된 JSON 문자열을 가져와 URL 디코딩한 후 JSON 문자열을 클래스 객체로 역직렬화합니다. 이를 통해 클래스를 GET 요청으로 백엔드에 보낼 수 있으며, 백엔드에서는 해당 데이터를 클래스로 처리할 수 있습니다.

// 이렇게 하면 GET 요청을 통해 클래스를 백엔드에 보낼 수 있으며, 백엔드에서 URL에서 쿼리 파라미터를 읽고 역직렬화하여 클래스 객체로 변환할 수 있습니다.





