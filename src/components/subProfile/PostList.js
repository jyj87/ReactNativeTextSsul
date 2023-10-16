import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';
import {setSelectSearchPostData} from '../../reducers/board_reducer';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostList = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const moveBoard = postIndex => {
    navigation.navigate('Board', {requestView: 'Profile'});
    dispatch(setSelectSearchPostData({postIndex: postIndex}));
  };

  return (
    <ScrollView style={styles.postAndCommentView}>
      {item.postAndComment.map((i, index) => (
        <TouchableOpacity onPress={() => moveBoard(i.postIndex)} key={index}>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Image source={i.postCoverImage} style={styles.postListImage} />
            <View style={styles.postListTextView}>
              <Text style={{fontWeight: 'bold'}}>{i.postTitle}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons name="heart" size={15} color="black" />
                <Text style={{marginRight: 5}}>{i.postLikeCount}</Text>
                <Ionicons name="eye" size={15} color="black" />
                <Text style={{marginRight: 5}}>{i.postViewCount}</Text>
                <MaterialIcons name="comment" size={15} color="black" />
                <Text style={{marginRight: 5}}>{i.postViewCount}</Text>
                <Text style={{marginRight: 5}}>{i.createdDate}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  postListImage: {
    width: screenWidth * (1 / 5),
    height: screenWidth * (1 / 5),
    borderRadius: 15,
    marginLeft: 10,
  },
  postListTextView: {
    marginHorizontal: 15,
    width: screenWidth * (4 / 5),
    justifyContent: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1, // 라인 두께
    borderBottomColor: '#DCD8D8', // 라인 색상
  },
  postAndCommentView: {
    width: screenWidth,
  },
});

export default PostList;
