import {View, Text, Alert} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {incrementLikeCount} from '../../reducers/board_reducer';

const MiddleArea = ({articleData}) => {
  const dispatch = useDispatch();
  // 좋아요 클릭 Count +1
  const contentLikeClick = () => {
    dispatch(incrementLikeCount());
  };

  // Article削除
  const articleDelete = (articleId) => {
    Alert.alert(
      '경고',
      '게시물을 삭제하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('취소 버튼이 눌렸습니다.'),
        },
        {
          text: '확인',
          onPress: () => console.log('확인 버튼이 눌렸습니다.'),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View name="middleArea" style={{marginHorizontal: 20}}>
      <View name="postContentArea">
        <Text>{articleData.content}</Text>
      </View>
      <View name="postLikeCountArea">
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{articleData.likeCnt}</Text>
          <Ionicons
            name="heart"
            size={55}
            color="black"
            onPress={() => contentLikeClick()}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingBottom: 20,
          }}>
          <MaterialCommunityIcons
            name="google-translate"
            size={15}
            color="black"
            style={{marginRight:3}}
          />
          <Ionicons
            name="trash"
            size={15}
            color="black"
            onPress={() => articleDelete(articleData.articleId)}
          />
        </View>
      </View>
    </View>
  );
};

export default MiddleArea;
