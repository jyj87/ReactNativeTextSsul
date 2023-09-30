import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {getRefreshData, getSortData} from '../reducers/search_reducer';
import {setPostData} from '../reducers/board_reducer';

const Search = ({route, navigation}) => {
  const dispatch = useDispatch();
  const searchPostList = useSelector(state => state.search.searchPostList);
  const [isLoading, setIsLoading] = useState(false);
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

  //Sort Button (sort처리가된 게시물을 취득)
  const sortData = flag => {
    dispatch(getSortData(flag));
  };

  //게시물 클릭
  const selectPost = postIndex => {
    navigation.navigate('Board', {
      postIndex: postIndex, requestView:"Search"
    })
  };

  return (
    <SafeAreaView edges={['top']} style={{marginHorizontal: 8, flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        name="searchBarArea"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          backgroundColor: '#DCD8D8',
          height: 30,
          borderRadius: 10,
        }}>
        <Entypo
          name="magnifying-glass"
          size={20}
          color={'#808080'}
          style={{
            marginHorizontal: 3,
          }}
        />
        <TextInput
          placeholder="검색어를 입력해주세요"
          keyboardType="web-search"
          style={{
            color: '#808080',
          }}
        />
      </View>
      <View name="sortArea" style={[styles.sortView]}>
        <TouchableOpacity
          onPress={() => sortData(1)}
          style={styles.sortTouchableArea}>
          <Ionicons name="heart" size={20} style={[styles.sortIcons]} />
          <Text>좋아요순</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sortData(2)}
          style={styles.sortTouchableArea}>
          <Ionicons name="eye" size={20} style={[styles.sortIcons]} />
          <Text>조회수순</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sortData(3)}
          style={styles.sortTouchableArea}>
          <MaterialIcons
            name="fiber-new"
            size={20}
            style={[styles.sortIcons]}
          />
          <Text>최신글순</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sortData(4)}
          style={styles.sortTouchableArea}>
          <MaterialIcons name="comment" size={20} style={[styles.sortIcons]} />
          <Text>댓글수순</Text>
        </TouchableOpacity>
      </View>
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
    </SafeAreaView>
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
  sortView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    height: 20,
  },
  sortTouchableArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortIcons: {
    marginHorizontal: 3,
  },
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
export default Search;
