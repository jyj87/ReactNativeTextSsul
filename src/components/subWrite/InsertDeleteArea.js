import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {insertPost} from '../../reducers/write_reducer';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {writeRequests} from '../../api/writeRequests';
import {WriteEnum} from '../../enum/requestConst';
import {reInit} from '../../reducers/home_reducer';
import ImageResizer from 'react-native-image-resizer';

const InsertDeleteArea = ({
  title,
  context,
  setTitle,
  setContext,
  selectedBoardTypeValue,
  selectedHashTypeValue,
  selectedPhoto,
  editFlag,
  articleData,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // cancel button -> home 이동
  const moveHome = () => {
    navigation.navigate('Home', {
      requestView: 'Write',
    });
  };

  //Image Size 変更
  const compressImage = async uri => {
    try {
      const compressedImage = await ImageResizer.createResizedImage(
        uri,
        800,
        600,
        'JPEG',
        80,
      );
      return compressedImage.uri;
    } catch (error) {
      console.error('Error compressing image:', error);
    }
  };

  //Image　UpLoad
  const setUpLoadImage = async imageUrl => {
    const formData = new FormData();
    const uri = await compressImage(imageUrl);
    const currentTime = new Date();
    const currentTimeString = currentTime.toLocaleString();
    formData.append('image', {
      uri: uri,
      type: 'image/jpeg',
      name: currentTimeString + '.jpg',
    });
    return await writeRequests(WriteEnum.UPLOAD_IMAGE, formData);
  };

  const validationCheck = () => {
    setTitle('');
    setContext('');
    //validation Check 추가 필요
  };
  // 게시글 등록 & 업데이트
  const setArticle = async () => {
    const imageIdList = [];
    // 게시글 등록전에 이미지를 등록하고 이미지 아이디를 취득
    if (selectedPhoto != null) {
      const imageInfo = setUpLoadImage(selectedPhoto);
      imageIdList.push(Number(imageInfo.imageId));
    }

    //게시글 업데이트
    if (editFlag) {
      await writeRequests(WriteEnum.UPDATE_ARTICLE, [
        title,
        null,
        selectedHashTypeValue,
        selectedBoardTypeValue,
        context,
        articleData.articleId,
        imageIdList,
      ]);
      //게시글 등록
    } else {
      await writeRequests(WriteEnum.CREATE_ARTICLE, [
        title,
        null,
        selectedHashTypeValue,
        selectedBoardTypeValue,
        context,
        imageIdList,
      ]);
    }
    //まだ、実装してない
    validationCheck();
    moveHome();
    //全体データ初期化
    dispatch(reInit());
  };
  return (
    <View
      name="insertDeleteArea"
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          moveHome();
        }}>
        <Octicons name="x" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setArticle();
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#DCD8D8',
          height: 25,
          paddingHorizontal: 5,
          borderRadius: 50,
        }}>
        {editFlag ? (
          <>
            <Feather name="edit" size={13} color="black" />
            <Text style={{marginHorizontal: 8}}>수정</Text>
          </>
        ) : (
          <>
            <FontAwesome name="send" size={13} color="black" />
            <Text style={{marginHorizontal: 8}}>등록</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InsertDeleteArea;
