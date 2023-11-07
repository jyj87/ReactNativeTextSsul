import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Text} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getRefreshData} from '../../reducers/search_reducer';
import {setArticleData} from '../../reducers/board_reducer';
import {useNavigation} from '@react-navigation/native';
import {readRequests} from '../../api/readRequests';
import {ReadEnum, SearchEnum} from '../../enum/requestConst';
import {searchRequests} from '../../api/searchRequests';

const ContentArea = ({isLoading, setIsLoading, articlesList}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //現在Page
  const [searchPage, setSearchPage] = useState(0);
  //最後Page確認
  const [endPageFlg, setEndPageFlg] = useState(false);
  //選択したソート（좋아요순,조회수순,최신글순,댓글순）
  const sortFlag = useSelector(state => state.search.sortFlag);

  // add Search
  const addSearchArticleData = async () => {
    const articlesList = await searchRequests(SearchEnum.ADD_POST, searchPage);
    if (articlesList.length !== 0) {
      setEndPageFlg(false);
      setSearchPage(searchPage + 1);
      dispatch(getRefreshData(articlesList));
    } else {
      setEndPageFlg(true);
    }
  };

  // 추가 게시물 취득
  const refreshData = () => {
    setIsLoading(true);
    if (!endPageFlg) {
      setTimeout(() => {
        addSearchArticleData();
      }, 500);
    }
    setIsLoading(false);
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
    // 빈 아티클인 경우 (마지막 페이지에 경우 없는 아티클은 아티클 아이디가 공백 혹은 널로 옮)
    if (articleId !== null && articleId !== '') {
      getArticle(articleId);
      navigation.navigate('Board', {requestView: 'Search'});
    }
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
        onEndReachedThreshold={0.01}
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
