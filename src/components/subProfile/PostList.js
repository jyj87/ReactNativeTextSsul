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
import {setArticleData, setSelectSearchPostData} from '../../reducers/board_reducer';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {formatDate} from '../../util/commonUtil';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { readRequests } from '../../api/readRequests';
import { ReadEnum } from '../../enum/requestConst';

const PostList = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getArticle = async articleId => {
    const article = await readRequests(ReadEnum.ARTICLE_READ, articleId);
    const articleCommentList = await readRequests(
      ReadEnum.COMMENT_READ,
      articleId,
    );
    dispatch(setArticleData({article, articleCommentList}));
  };

  const moveBoard = articleId => {
    getArticle(articleId);
    navigation.navigate('Board', {
      requestView: 'Profile',
    });
  };

  return (
    <ScrollView style={styles.postAndCommentView}>
      {item.articleAndCommentList.map((userArticle, index) => (
        <TouchableOpacity onPress={() => moveBoard(userArticle.articleId)} key={index}>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Image source={userArticle.thumbnailImagePath} style={styles.postListImage} />
            <View style={styles.postListTextView}>
              <Text style={{fontWeight: 'bold'}}>{userArticle.articleTitle}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons name="heart" size={15} color="black" />
                <Text style={{marginRight: 5}}>{userArticle.likeCnt}</Text>
                <Ionicons name="eye" size={15} color="black" />
                <Text style={{marginRight: 5}}>{userArticle.viewCnt}</Text>
                <MaterialIcons name="comment" size={15} color="black" />
                <Text style={{marginRight: 5}}>{userArticle.commentCnt}</Text>
                <Text style={{marginRight: 5}}>{formatDate(userArticle.createDt)}</Text>
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
