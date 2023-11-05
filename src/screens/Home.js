import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setPostData} from '../reducers/board_reducer';
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //Home Data 취득
  const homeArticleList = useSelector(state => state.home.homeArticleList);

  // Board view 이동 -> postData 셋팅
  const moveBoard = postData => {
    console.log('moveBoard');
    dispatch(setPostData(postData));
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
                    moveBoard({postData: item.articleId});
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
const bottomNavigatorHeight = 106.5;
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
