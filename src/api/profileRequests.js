import axios from 'axios';
import {ProfileEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import { getToken } from '../util/accessToken';

/**
 * Profile API
 *
 * @param {ProfileEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const profileRequests = async type => {
    // headers設定
    const headers = {
      Authorization: `Bearer ${await getToken()}`,
      'Content-Type': 'application/json',
    };
    
  switch (type) {
    case ProfileEnum.INIT_MY_POST:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
      case ProfileEnum.INIT_MY_COMMENTS:
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
