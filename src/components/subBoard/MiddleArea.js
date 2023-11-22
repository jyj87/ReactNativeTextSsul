import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {insertContents} from '../../reducers/board_reducer';
import {changeEditFlag} from '../../reducers/write_reducer';
import {reInit} from '../../reducers/home_reducer';
import {boardRequests} from '../../api/boardRequests';
import {readRequests} from '../../api/readRequests';
import {deleteRequests} from '../../api/deleteRequests';
import {BoardEnum, ReadEnum, DeleteEnum} from '../../enum/requestConst';
import {useNavigation} from '@react-navigation/native';

const MiddleArea = ({articleData}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLikeToggled, setIsLikeToggled] = useState(false);
  const member = useSelector(state => state.profile.member);

  const contentLikeClick = async () => {
    setIsLikeToggled(!isLikeToggled);
    await boardRequests(BoardEnum.ARTICLE_LIKE, [
      articleData.articleId,
      isLikeToggled ? 1 : 0,
    ]);
    const article = await readRequests(
      ReadEnum.ARTICLE_READ,
      articleData.articleId,
    );
    dispatch(insertContents({article}));
  };

  const deleteArticle = async () => {
    await deleteRequests(DeleteEnum.DELETE_ARTICLE, [articleData.articleId]);
    //全体データ初期化
    dispatch(reInit());
  };
  // Article削除
  const deleteButtonProcess = () => {
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
          onPress: () => {
            console.log('확인 버튼이 눌렸습니다.');
            deleteArticle();
            navigation.navigate('Home');
          },
        },
      ],
      {cancelable: false},
    );
  };

  // Article修正
  const editButtonProcess = () => {
    dispatch(changeEditFlag(true));
    navigation.navigate('Write', {
      requestView: 'Board',
    });
  };

  return (
    <View name="middleArea" style={{marginHorizontal: 20}}>
      <View name="articleContentArea">
        <Text>{articleData.articleContent}</Text>
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
            size={18}
            color="black"
            style={{marginRight: 3}}
          />
          {String(member.uid) === String(articleData.authorUid) && (
            <Ionicons
              name="trash"
              size={18}
              color="black"
              style={{marginRight: 4}}
              onPress={() => deleteButtonProcess()}
            />
          )}
          {String(member.uid) === String(articleData.authorUid) && (
            <Feather
              name="edit"
              size={18}
              color="black"
              style={{marginRight: 4}}
              onPress={() => editButtonProcess()}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default MiddleArea;
