import AsyncStorage from '@react-native-async-storage/async-storage';
import {log} from '../log/log_a';

const ACCESS_TOKEN = 'accessToken';

// Token設定
export const setToken = async token => {
  await AsyncStorage.setItem(ACCESS_TOKEN, token)
    .then(() => {
      log.debug('토큰 저장 완료', token);
    })
    .catch(error => {
      log.debug('토큰 저장 실패: ', error);
    });
};

// Token取得
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN);
    if (token !== null) {
      log.debug('검색된 토큰:', token);
      return token;
    } else {
      log.debug('토큰이 저장되어 있지 않습니다.');
      return null;
    }
  } catch (error) {
    log.debug('토큰 검색 실패: ', error);
    return null;
  }
};

// Tokenクリア
export const clearToken = async token => {
  await AsyncStorage.clear()
    .then(() => {
      log.debug('모든 데이터 삭제 완료');
    })
    .catch(error => {
      log.debug('데이터 삭제 실패: ', error);
    });
};
