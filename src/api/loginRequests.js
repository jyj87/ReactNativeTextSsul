import axios from 'axios';
import {LoginEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Member from '../models/Member';

export const loginRequests = async (type, requestData) => {
  switch (type) {
    //ログイン処理　→ Token取得
    case LoginEnum.LOGIN_PROCESS:
      try {
        const member = new Member(requestData);
        const response = await axios.post(GeneralEnum.BACK_END_LOGIN, member);
        const accessToken = response.data.responseData.accessToken
        AsyncStorage.setItem('accessToken',response.data.responseData.accessToken)
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
