import axios from 'axios';
import {ProfileEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import {getToken, userInfo} from '../util/accessToken';
import {urlUserArticlesSelect} from '../util/urlQueryString';
import {log} from '../log/log_a';
import { testRandomImagePath } from '../util/testUtil';

/**
 * Profile API
 *
 * @param {ProfileEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const profileRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`,
    'Content-Type': 'application/json',
  };

  switch (type) {
    case ProfileEnum.INIT_PROFILE:
      log.info('Member取得処理 START');
      try {
        const member = await userInfo();
        log.debug('Member取得', member);
        log.info('Member取得処理 END');
        return member;
      } catch (error) {
        throw error;
      }
      break;
    case ProfileEnum.INIT_MY_ARTICLE:
      log.info('UserArticle取得処理 START');
      try {
        const url = urlUserArticlesSelect(requestData);
        const response = await axios.get(url, null, {
          headers: headers,
        });
        const articleList = response.data.responseData.articleList;
        log.debug('UserArticle取得', articleList);
        log.info('UserArticle取得処理 END');
        return articleList;
      } catch (error) {
        throw error;
      }
      break;
    case ProfileEnum.INIT_MY_COMMENTS:
      try {
        const commentList = [];
        return commentList;
      } catch (error) {
        throw error;
      }
      break;
    case ProfileEnum.SELECT_USER_INFO:
      try {
        const member = await userInfo();
        const url = urlUserArticlesSelect(requestData);
        const response = await axios.get(url, null, {
          headers: headers,
        });
        const articleList = response.data.responseData.articleList;
        const commentList = [];
        const createdUserInfo = createUserInfo(member,articleList,commentList);
        return createdUserInfo;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};

const createUserInfo = (member,articleList,commentList) =>{
  const userInfo = {
    member: {
      uid: '',
      email: '',
      nickName: '',
      lv: '',
      articleCount: '',
      likeCount: '',
      point: '',
    },
    userArticleAndCommentList: [
      {
        typeIndex: 1,
        articleAndCommentList: [],
      },
      {
        typeIndex: 2,
        articleAndCommentList: [],
      },
    ],
  };
  userInfo.userArticleAndCommentList[0].articleAndCommentList =
    articleList === undefined || articleList === null ? [] : articleList;
  userInfo.userArticleAndCommentList[1].articleAndCommentList =
    commentList === undefined || commentList === null ? [] : commentList;

  userInfo.member.uid = member.uid;
  userInfo.member.nickName = member.nickName;
  userInfo.member.email =
    member.email === undefined || member.email === null
      ? 'xxxxx@gmail.com'
      : member.email;
  userInfo.member.point =
    member.point === undefined || member.point === null ? 'xx' : member.point;
  userInfo.member.lv =
    member.lv === undefined || member.lv === null ? 'xx' : member.lv;

  userInfo.member.articleCount = String(articleList.length);
  var sumLike = 0;
  userInfo.userArticleAndCommentList[0].articleAndCommentList.forEach(element => {
    // testy用Image
    element.thumbnailImagePath = testRandomImagePath();
    // User作成したArticleの「いいね」の総合数
    sumLike += element.likeCnt;
  });
  userInfo.member.likeCount = String(sumLike);
  return userInfo
}
