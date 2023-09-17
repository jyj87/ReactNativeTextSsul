import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Board = ({route, navigation}) => {
  const {boardData} = route.params;
  const comments = boardData.comments;
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView
        style={[
          Platform.OS === 'ios' ? styles.iosScrollView : androidScrollView,
        ]}>
        <View
          style={{
            flex: 1,
          }}>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 22, marginTop: 30}}>
                {boardData.boardTitle}
              </Text>
              <Text style={{marginTop: 10}}>{boardData.boardUserName}</Text>
            </View>
            <View
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
              <Text>{boardData.boardName}</Text>
              <Ionicons
                name="eye"
                size={15}
                color="black"
                style={{marginHorizontal: 3}}
              />
              <Text>{boardData.boardViewCount}</Text>
              <Ionicons
                name="heart"
                size={15}
                color="black"
                style={{marginHorizontal: 3}}
              />
              <Text>{boardData.boardLikeCount}</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.textLine} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text>{boardData.boardContext}</Text>
          </View>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{boardData.boardLikeCount}</Text>
              <Ionicons name="heart" size={55} color="black" />
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
            <View
              style={{
                backgroundColor: '#DCD8D8',
                borderRadius: 5,
              }}>
              <View style={{marginHorizontal: 10, marginTop: 10}}>
                {comments.map((item, index) => (
                  <View>
                    <View>
                      <Text>{item.writer}</Text>
                      <Text>{item.context}</Text>
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
                      />
                      <Text>{item.likeCount}</Text>
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
                  style={{
                    flexDirection: 'row',
                    borderWidth: 2,
                    marginVertical: 5,
                  }}>
                  <View style={{flex: 1}}>
                    <TextInput
                      placeholder="댓글을 작성해주세요"
                      keyboardType="web-search"
                    />
                  </View>
                  <TouchableHighlight>
                    <View style={{marginHorizontal: 3}}>
                      <Ionicons
                        name="arrow-up-circle"
                        size={20}
                        color="black"
                      />
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
