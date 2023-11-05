import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {
  insertCommentText,
  incrementCommentLikeCount,
} from '../../reducers/board_reducer';

const BottomArea = ({articleCommentList}) => {
  const dispatch = useDispatch();
  //댓글 입력창
  const [commentText, setCommentText] = useState('');
  //댓글 등록
  const commentTextInsert = () => {
    if (commentText.trim() === '') {
      Alert.alert('경고', '데이터를 입력해주세요');
    } else {
      console.log('등륵 실행');
      dispatch(insertCommentText({commentText: commentText}));
      setCommentText('');
    }
  };
  // 코맨트 좋아요 클릭 Count +1
  const commentLikeClick = index => {
    console.log('좋아요 클릭', index);
    dispatch(incrementCommentLikeCount(index));
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
          {articleCommentList.commentList.map((item, index) => (
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
                  onPress={() => commentLikeClick(index)}
                />
                {/* ★항목 추가 요청 필요 */}
                {/* <Text>{item.commentLikeCount}</Text> */}
                <Text>11</Text>
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
                onSubmitEditing={() => commentTextInsert()}
              />
            </View>
            <TouchableOpacity onPress={() => commentTextInsert()}>
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
