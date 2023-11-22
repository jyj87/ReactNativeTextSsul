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

  const validationCheck = () => {
    setTitle('');
    setContext('');
    //validation Check 추가 필요
    // dispatch(
    //   insertPost({
    //     insertData: [
    //       title,
    //       context,
    //       selectedBoardTypeValue,
    //       selectedHashTypeValue,
    //       selectedPhoto,
    //     ],
    //   }),
    // );
  };
  // 게시글 등록 & 업데이트
  const setArticle = async () => {
    //게시글 업데이트
    if (editFlag) {
      await writeRequests(WriteEnum.UPDATE_ARTICLE, [
        title,
        null,
        selectedHashTypeValue,
        selectedBoardTypeValue,
        context,
        articleData.articleId,
      ]);
      //게시글 등록
    } else {
      await writeRequests(WriteEnum.CREATE_ARTICLE, [
        title,
        null,
        selectedHashTypeValue,
        selectedBoardTypeValue,
        context,
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
