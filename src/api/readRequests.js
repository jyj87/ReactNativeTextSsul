import axios from 'axios';
import {ReadEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import RequestArtWrite from '../models/RequestArtWrite';
import {getToken} from '../util/accessToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {log} from '../log/log_a';


/**
 * Read API
 * 
 * @param {ReadEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const readRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`, 
    'Content-Type': 'application/json',
  };

  switch (type) {
    case ReadEnum.COMMENT_READ:
      log.info('コメント取得処理 START');
      try {
        const data = new RequestArtWrite(requestData);
        const response = await axios.post(GeneralEnum.BACK_END_WRITE, data, {
          headers: headers,
        });
        log.debug('コメント取得', response.data);
      } catch (error) {
        throw error;
      }
      log.info('コメント取得処理 END');
      break;
    default:
      break;
  }
};
