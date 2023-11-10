import axios from 'axios';
import {WriteEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';
import RequestArtWrite from '../models/RequestArtWrite';
import {getToken} from '../util/accessToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {log} from '../log/log_a';

/**
 * Write API
 *
 * @param {WriteEnum} type - 処理区分
 * @param {any} requestData - 転送データ
 */
export const writeRequests = async (type, requestData) => {
  // headers設定
  const headers = {
    Authorization: `Bearer ${await getToken()}`,
    'Content-Type': 'application/json',
  };

  switch (type) {
    case WriteEnum.CREATE_POST:
      log.info('POST作成処理 START');
      try {
        const data = new RequestArtWrite(requestData);
        log.debug('POST登録データ', data);
        const response = await axios.post(GeneralEnum.BACK_END_WRITE, data, {
          headers: headers,
        });
      } catch (error) {
        throw error;
      }
      log.info('POST作成処理 END');
      break;
    case WriteEnum.CREATE_COMMENT:
      log.info('Comment作成処理 START');
      try {
        const data = new RequestArtWrite(requestData);
        log.debug('Comment登録データ', data);
        const response = await axios.post(GeneralEnum.BACK_END_WRITE, data, {
          headers: headers,
        });
      } catch (error) {
        throw error;
      }
      log.info('Comment作成処理 END');
      break;
    default:
      break;
  }
};
