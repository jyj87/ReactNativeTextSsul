import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Text} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {getRefreshData} from '../../reducers/search_reducer';
import {setArticleData} from '../../reducers/board_reducer';
import {useNavigation} from '@react-navigation/native';
import { readRequests } from '../../api/readRequests';
import { ReadEnum } from '../../enum/requestConst';

const ContentArea = ({isLoading, setIsLoading, articlesList}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // 추가 게시물 취득
  const refreshData = () => {
    // setIsLoading(true);
    // setTimeout(() => {
    //   dispatch(getRefreshData());
    // }, 3000);
    // setIsLoading(false);
  };
  // 추가 게시물 취득시 Loading View 작성
  const renderFooter = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <View style={{padding: 16, alignItems: 'center'}}>
          <Text>Load More</Text>
        </View>
      );
    }
  };

  //選択したArticleデータ取得
  const getArticle = async articleId => {
    const article = await readRequests(ReadEnum.ARTICLE_READ, articleId);
    const articleCommentList = await readRequests(
      ReadEnum.COMMENT_READ,
      articleId,
    );
    dispatch(setArticleData({article, articleCommentList}));
  };

  //Article クリック
  const selectPost = articleId => {
    getArticle(articleId);
    navigation.navigate('Board', {requestView: 'Search'});
  };

  return (
    <View name="contentArea" style={{flex: 1}}>
      <FlatList
        // 옵션: 가로 배치
        horizontal={false}
        // 옵션: 스크롤바를 숨김
        showsVerticalScrollIndicator={false}
        data={articlesList}
        // keyExtractor={item => item.postSetIndex}
        ListFooterComponent={renderFooter}
        onEndReached={refreshData}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => selectPost(item[0].articleId)}
              style={[styles.postView, styles.postPostSize]}>
              <ImageBackground
                source={item[0].thumbnailImagePath}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.postViewAreaBackgroundImage}>
                <View style={styles.postAreaContent}>
                  <Text style={styles.postAreaText}>
                    {item[0].articleTitle}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectPost(item[1].articleId)}
              style={[styles.postView, styles.postPostSize]}>
              <ImageBackground
                source={item[1].thumbnailImagePath}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.postViewAreaBackgroundImage}>
                <View style={styles.postAreaContent}>
                  <Text style={styles.postAreaText}>
                    {item[1].articleTitle}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectPost(item[2].articleId)}
              style={[styles.postView, styles.postPostSize]}>
              <ImageBackground
                source={item[2].thumbnailImagePath}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.postViewAreaBackgroundImage}>
                <View style={styles.postAreaContent}>
                  <Text style={styles.postAreaText}>
                    {item[2].articleTitle}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const bottomNavigatorHeight = 80;
const searchBarHeight = 40;
const sortBarHeight = 40;
const postHeight =
  (screenHeight - bottomNavigatorHeight - searchBarHeight - sortBarHeight) / 3;
const postWidth = (screenWidth - 15) / 3;
const styles = StyleSheet.create({
  postPostSize: {
    width: postWidth,
    height: postHeight,
  },
  postView: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  postViewAreaBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  postAreaText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  postAreaContent: {
    marginBottom: 3,
    marginHorizontal: 0.5,
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ContentArea;
