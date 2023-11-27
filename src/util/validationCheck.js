import {GeneralEnum} from '../enum/generalConst';
import {Alert} from 'react-native';

// custom Alert
const showAlert = message => {
  Alert.alert(
    '경고',
    message,
    [
      {
        text: '확인',
        // onPress: () => console.log('확인 버튼이 눌렸습니다.')
      },
    ],
    {cancelable: false},
  );
};

// Validation Check
export const validationCheck = (type, checkData) => {
  // Article Check
  if (GeneralEnum.VALIDATION_CHECK_ARTICLE === type) {
    const title = checkData[0];
    const context = checkData[1];

    if (title.trim() === '' || title === null) {
      showAlert('제목을 입력해 주세요');

      return false;
    }

    if (title.length > 50) {
      showAlert('제목이 50자를 초과 했습니다.');
      return false;
    }

    if (context.trim() === '' || context === null) {
      showAlert('내용을 입력해 주세요');
      return false;
    }

    if (context.length > 10000) {
      showAlert('내용이 10000자를 초과 했습니다.');
      return false;
    }
    return true;
  }

  // Comment Check
  if (GeneralEnum.VALIDATION_CHECK_COMMENT === type) {
    const commentText = checkData[0];

    if (commentText.trim() === '' || commentText === null) {
      showAlert('내용을 입력해 주세요');
      return false;
    }

    if (commentText.length > 3000) {
      showAlert('내용이 3000자를 초과 했습니다.');
      return false;
    }
    return true;
  }
};
