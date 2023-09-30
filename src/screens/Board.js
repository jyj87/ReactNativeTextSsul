import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementLikeCount,
  setPostData,
  insertCommentText,
  incrementCommentLikeCount,
} from '../reducers/board_reducer';
import {
  PanGestureHandler,
  TouchableOpacity,
  State,
} from 'react-native-gesture-handler';
const Board = ({route, navigation}) => {
  const dispatch = useDispatch();
  // 1.setPostData = Home화면접속시DB부터DATA취득
  // 2.state.board.port -> postData
  useEffect(() => {
    dispatch(setPostData(route.params));
  }, []);
  const postData = useSelector(state => state.board.post);
  const comments = postData.comments;
  // 좋아요 클릭 Count +1
  const contentLikeClick = () => {
    dispatch(incrementLikeCount());
  };
  //댓글 입력창
  const [commentText, setCommentText] = useState('');
  //댓글 등록
  const commentTextInsert = () => {
    if (commentText.trim() === '') {
      Alert.alert('경고', '데이터를 입력해주세요');
    } else {
      console.log('등륵 실행');
      dispatch(insertCommentText(commentText));
      setCommentText('')
    }
  };
  // 코맨트 좋아요 클릭 Count +1
  const commentLikeClick = index => {
    console.log('좋아요 클릭', index);
    dispatch(incrementCommentLikeCount(index));
  };
  // 뒤로 가기
  const goBack = (event) => {
      if (event.nativeEvent.translationX > 50 ) {
        // navigation.goBack();
        navigation.navigate('Home');
      }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <PanGestureHandler onGestureEvent={goBack}>
        <View
          style={{
            flex: 1,
          }}>
          <View>
            {/* ========== 상단 Start ========== */}
            <View name="highArea">
              <View
                name="postTitleUserNameArea"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 22, marginTop: 30}}>
                  {postData.postTitle}
                </Text>
                <Text style={{marginTop: 10}}>{postData.postWriter}</Text>
              </View>
              <View
                name="postHashViewLikeCountArea"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Feather
                  name="hash"
                  size={15}
                  color="black"
                  style={{marginHorizontal: 3}}
                />
                <Text>{postData.postType}</Text>
                <Ionicons
                  name="eye"
                  size={15}
                  color="black"
                  style={{marginHorizontal: 3}}
                />
                <Text>{postData.postViewCount}</Text>
                <Ionicons
                  name="heart"
                  size={15}
                  color="black"
                  style={{marginHorizontal: 3}}
                />
                <Text>{postData.postLikeCount}</Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.textLine} />
            </View>
          </View>
          {/* ========== 상단 End ========== */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[
              Platform.OS === 'ios' ? styles.iosScrollView : androidScrollView,
            ]}>
            {/* ========== 중단 Start ========== */}
            <View name="middleArea" style={{marginHorizontal: 20}}>
              <View name="postContentArea">
                <Text>{postData.postContext}</Text>
              </View>
              <View name="postLikeCountArea">
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{postData.postLikeCount}</Text>
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
                  />
                </View>
              </View>
            </View>
            {/* ========== 중단 End ========== */}
            {/* ========== 하단 Start ========== */}
            <View name="rowArea">
              <View
                name="postCommentsArea"
                style={{
                  marginHorizontal: 20,
                  backgroundColor: '#DCD8D8',
                  borderRadius: 5,
                }}>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                  {/* id 순으로 오름차순 정렬 */}
                  {comments.map((item, index) => (
                    <View key={index}>
                      <View>
                        <Text>{item.commentWriter}</Text>
                        <Text>{item.commentContext}</Text>
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
                        <Text>{item.commentLikeCount}</Text>
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
                      />
                    </View>
                    <TouchableOpacity onPress={() => commentTextInsert()}>
                      <View style={{marginHorizontal: 3}}>
                        <Ionicons
                          name="arrow-up-circle"
                          size={20}
                          color="black"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/* ========== 하단 End ========== */}
          </ScrollView>
        </View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iosScrollView: {
    showsVerticalScrollIndicator: false,
  },
  androidScrollView: {
    android: (fadeScrollbars = 'true'),
  },
  textLine: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    width: '95%',
    marginVertical: 10,
  },
});
export default Board;
