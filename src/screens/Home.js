import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setArticleData} from '../reducers/board_reducer';
import {setRefreshData} from '../reducers/home_reducer';
import {readRequests} from '../api/readRequests';
import {ReadEnum,HomeEnum} from '../enum/requestConst';
import { homeRequests } from '../api/homeRequests';
const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [endPageFlg, setEndPageFlg] = useState(false);
  const [homePage, setHomePage] = useState(0);
  const dispatch = useDispatch();

  //Home Data 취득
  const homeArticleList = useSelector(state => state.home.homeArticleList);

  //選択したArticleデータ取得
  const getArticle = async articleId => {
    const article = await readRequests(ReadEnum.ARTICLE_READ, articleId);
    const articleCommentList = await readRequests(
      ReadEnum.COMMENT_READ,
      articleId,
    );
    dispatch(setArticleData({article, articleCommentList}));
  };

  // add Home
  const addHomeArticleData = async () => {
    const articlesList = await homeRequests(HomeEnum.ADD_ARTICLE, homePage);
    //取得したデータがある場合のみ実施
    if (articlesList.length !== 0) {
      setEndPageFlg(false);
      setHomePage(homePage + 1);
      dispatch(setRefreshData(articlesList));
    } else {
      setEndPageFlg(true);
    }
  };

  // 추가 게시물 취득
  const refreshData = () => {
    setIsLoading(true);
    if (!endPageFlg) {
      setTimeout(() => {
        addHomeArticleData();
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

  // Board view 이동 -> article 셋팅
  const moveBoard = articleId => {
    getArticle(articleId);
    navigation.navigate('Board', {
      requestView: 'Home',
    });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.baseFlex}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <FlatList
        // 옵션: 세로 배치
        horizontal={false}
        // 옵션: 페이징 단위로 넘어감
        pagingEnabled={true}
        // 옵션: 스크롤바를 숨김
        showsVerticalScrollIndicator={false}
        data={homeArticleList}
        keyExtractor={item => item.articleId}
        ListFooterComponent={renderFooter}
        onEndReached={refreshData}
        onEndReachedThreshold={0.01}
        renderItem={({item}) => (
          <View>
            <ImageBackground
              source={item.thumbnailImagePath}
              style={styles.backgroundImage}
              resizeMode="cover">
              <View style={styles.content}>
                <Text
                  style={styles.text}
                  onPress={() => {
                    moveBoard(item.articleId);
                  }}>
                  {item.articleTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
// 현재 디바이스의 화면 너비 가져오기
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;
const bottomNavigatorHeight = 107;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight - statusBarHeight - bottomNavigatorHeight,
  },
  baseFlex: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
