import { View, Text } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const topArea = ({articleData}) => {
  return (
    <View name="topArea">
    <View
      name="postTitleUserNameArea"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, marginTop: 30}}>
        {articleData.articleTitle}
      </Text>
      <Text style={{marginTop: 10}}>{articleData.authorNick}</Text>
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
      <Text>{articleData.categoryNm}</Text>
      <Ionicons
        name="eye"
        size={15}
        color="black"
        style={{marginHorizontal: 3}}
      />
      <Text>{articleData.viewCnt}</Text>
      <Ionicons
        name="heart"
        size={15}
        color="black"
        style={{marginHorizontal: 3}}
      />
      <Text>{articleData.likeCnt}</Text>
    </View>
  </View>
  )
}

export default topArea