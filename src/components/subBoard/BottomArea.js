import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {insertComment} from '../../reducers/board_reducer';
import {writeRequests} from '../../api/writeRequests';
import {ReadEnum, WriteEnum, BoardEnum} from '../../enum/requestConst';
import {readRequests} from '../../api/readRequests';
import {boardRequests} from '../../api/boardRequests';

const BottomArea = ({articleCommentList, articleData}) => {
  const dispatch = useDispatch();
  const [isLikeToggled, setIsLikeToggled] = useState(false);
  //댓글 입력창
  const [commentText, setCommentText] = useState('');

  //댓글 등록
  const insertCommentText = async () => {
    if (commentText.trim() === '') {
      Alert.alert('경고', '데이터를 입력해주세요');
    } else {
      await writeRequests(WriteEnum.CREATE_COMMENT, [
        articleData.articleId,
        commentText,
      ]);
      const articleCommentList = await readRequests(
        ReadEnum.COMMENT_READ,
        articleData.articleId,
      );
      dispatch(insertComment({articleCommentList: articleCommentList}));
      setCommentText('');
    }
  };
  // 코맨트 좋아요 클릭 Count +1
  const commentLikeClick = async commentId => {
    setIsLikeToggled(!isLikeToggled);
    await boardRequests(BoardEnum.COMMENT_LIKE, [
      articleData.articleId,
      commentId,
      isLikeToggled ? 1 : 0,
    ]);
    const articleCommentList = await readRequests(
      ReadEnum.COMMENT_READ,
      articleData.articleId,
    );
    dispatch(insertComment({articleCommentList: articleCommentList}));
  };

  return (
    <View name="bottomArea">
      <View
        name="postCommentsArea"
        style={{
          marginHorizontal: 20,
          backgroundColor: '#DCD8D8',
          borderRadius: 5,
        }}>
        <View style={{marginHorizontal: 10, marginTop: 10}}>
          {/* id 순으로 오름차순 정렬 */}
          {articleCommentList.map((item, index) => (
            <View key={index}>
              <View>
                <Text>{item.authorNick}</Text>
                <Text>{item.comment}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Ionicons
                  name="heart"
                  size={15}
                  color="black"
                  style={{marginHorizontal: 3}}
                  onPress={() => commentLikeClick(item.commentId)}
                />
                <Text>{item.likeCnt}</Text>
                <MaterialCommunityIcons
                  name="google-translate"
                  size={15}
                  color="black"
                  style={{marginHorizontal: 3}}
                />
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: 'gray',
                  marginVertical: 2,
                }}
              />
            </View>
          ))}
          <View
            name="postCommentWriteArea"
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              marginVertical: 5,
            }}>
            <View style={{flex: 1}}>
              <TextInput
                placeholder="댓글을 작성해주세요"
                keyboardType="web-search"
                onChangeText={text => setCommentText(text)}
                value={commentText}
                onSubmitEditing={() => insertCommentText()}
              />
            </View>
            <TouchableOpacity onPress={() => insertCommentText()}>
              <View style={{marginHorizontal: 3}}>
                <Ionicons name="arrow-up-circle" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomArea;
