import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getInitPostList} from '../reducers/home_reducer';
import {getInitSearchPostList} from '../reducers/search_reducer';

const Home = () => {
  //초기화면이 Home 기본 데이터 취득 
  useEffect(() => {
    dispatch(getInitPostList());
    dispatch(getInitSearchPostList());
  }, []);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homePostList = useSelector(state => state.home.homePostList);

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
        data={homePostList}
        keyExtractor={item => item.postIndex}
        renderItem={({item}) => (
          <View>
            <ImageBackground
              source={item.postCoverImage}
              style={styles.backgroundImage}
              resizeMode="cover">
              <View style={styles.content}>
                <Text
                  style={styles.text}
                  onPress={() =>
                    navigation.navigate('Board', {
                      postData: item, requestView:"Home"
                    })
                  }>
                  {item.postTitle}
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
const bottomNavigatorHeight = 120; 
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight - statusBarHeight - bottomNavigatorHeight,
    // height: '100%',
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
