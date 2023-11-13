import AsyncStorage from '@react-native-async-storage/async-storage';
import {log} from '../log/log_a';

const ACCESS_TOKEN = 'accessToken';
const UID = 'uid';
const NICK_NAME = 'nickname';

// userData設定
export const setToken = async userData => {
  await AsyncStorage.setItem(ACCESS_TOKEN, userData.accessToken)
    .then(() => {
      log.debug('토큰 저장 완료', userData.accessToken);
    })
    .catch(error => {
      log.debug('토큰 저장 실패: ', userData.accessToken);
    });

    await AsyncStorage.setItem(UID, String(userData.uid))
    .then(() => {
      log.debug('UID 저장 완료', userData.uid);
    })
    .catch(error => {
      log.debug('UID 저장 실패: ', userData.uid);
    });

    await AsyncStorage.setItem(NICK_NAME, userData.nickname)
    .then(() => {
      log.debug('닉네임 저장 완료', userData.nickname);
    })
    .catch(error => {
      log.debug('닉네임 저장 실패: ', userData.nickname);
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
