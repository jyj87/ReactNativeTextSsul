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
import {setSelectSearchPostData} from '../../reducers/board_reducer';
import { useNavigation } from '@react-navigation/native';

const ContentArea = ({isLoading, setIsLoading, searchPostList}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // 추가 게시물 취득
  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(getRefreshData());
    }, 3000);
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
  //게시물 클릭
  const selectPost = postIndex => {
    navigation.navigate('Board', {requestView: 'Search'});
    dispatch(setSelectSearchPostData({postIndex: postIndex}));
  };
  
  return (
    <View name="contentArea" style={{flex: 1}}>
      <FlatList
        // 옵션: 가로 배치
        horizontal={false}
        // 옵션: 스크롤바를 숨김
        showsVerticalScrollIndicator={false}
        data={searchPostList}
        keyExtractor={item => item.postSetIndex}
        ListFooterComponent={renderFooter}
        onEndReached={refreshData}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => selectPost(item.post1.postIndex)}
              style={[styles.postView, styles.postPostSize]}>
              <ImageBackground
                source={item.post1.postCoverImage}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.postViewAreaBackgroundImage}>
                <View style={styles.postAreaContent}>
                  <Text style={styles.postAreaText}>
                    {item.post1.postTitle}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectPost(item.post2.postIndex)}
              style={[styles.postView, styles.postPostSize]}>
              <ImageBackground
                source={item.post2.postCoverImage}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.postViewAreaBackgroundImage}>
                <View style={styles.postAreaContent}>
                  <Text style={styles.postAreaText}>
                    {item.post2.postTitle}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectPost(item.post3.postIndex)}
              style={[styles.postView, styles.postPostSize]}>
              <ImageBackground
                source={item.post3.postCoverImage}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.postViewAreaBackgroundImage}>
                <View style={styles.postAreaContent}>
                  <Text style={styles.postAreaText}>
                    {item.post3.postTitle}
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
