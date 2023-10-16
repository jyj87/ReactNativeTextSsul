import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {incrementLikeCount} from '../../reducers/board_reducer';

const MiddleArea = ({postData}) => {
  const dispatch = useDispatch();
  // 좋아요 클릭 Count +1
  const contentLikeClick = () => {
    dispatch(incrementLikeCount());
  };

  return (
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
  );
};

export default MiddleArea;