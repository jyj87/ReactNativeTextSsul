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
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {getRefreshData} from '../reducers/search_reducer';

const Search = () => {
  const dispatch = useDispatch();
  const searchPostList = useSelector(state => state.search.searchPostList);
  const [isLoading, setIsLoading] = useState(false);
  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(getRefreshData());
      setIsLoading(false);
    }, 10000);
  };

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
      <View
        name="sortArea"
        style={[
          styles.sortView,
          {justifyContent: 'space-between', marginBottom: 10, height: 20},
        ]}>
        <View name="sort1" style={[styles.sortView]}>
          <Ionicons name="heart" size={20} style={[styles.sortIcons]} />
          <TouchableOpacity>
            <Text>좋아요순</Text>
          </TouchableOpacity>
        </View>
        <View name="sort2" style={[styles.sortView]}>
          <Ionicons name="eye" size={20} style={[styles.sortIcons]} />
          <TouchableOpacity>
            <Text>조회수순</Text>
          </TouchableOpacity>
        </View>
        <View name="sort3" style={[styles.sortView]}>
          <MaterialIcons
            name="fiber-new"
            size={20}
            style={[styles.sortIcons]}
          />
          <TouchableOpacity>
            <Text>최신글순</Text>
          </TouchableOpacity>
        </View>
        <View name="sort4" style={[styles.sortView]}>
          <MaterialIcons name="comment" size={20} style={[styles.sortIcons]} />
          <TouchableOpacity>
            <Text>댓글수순</Text>
          </TouchableOpacity>
        </View>
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
              <View style={[styles.subView, styles.subPostSize]}>
                <ImageBackground
                  source={item.postCoverImage1}
                  imageStyle={{borderRadius: 10}}
                  resizeMode="cover"
                  style={styles.subAreaBackgroundImage}>
                  <View style={styles.subAreaContent}>
                    <Text style={styles.subAreaText}>{item.postTitle1}</Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={[styles.subView, styles.subPostSize]}>
                <ImageBackground
                  source={item.postCoverImage2}
                  imageStyle={{borderRadius: 10}}
                  resizeMode="cover"
                  style={styles.subAreaBackgroundImage}>
                  <View style={styles.subAreaContent}>
                    <Text style={styles.subAreaText}>{item.postTitle2}</Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={[styles.subView, styles.subPostSize]}>
                <ImageBackground
                  source={item.postCoverImage3}
                  imageStyle={{borderRadius: 10}}
                  resizeMode="cover"
                  style={styles.subAreaBackgroundImage}>
                  <View style={styles.subAreaContent}>
                    <Text style={styles.subAreaText}>{item.postTitle3}</Text>
                  </View>
                </ImageBackground>
              </View>
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
  subPostSize: {
    width: postWidth,
    height: postHeight,
  },
  sortView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortIcons: {
    marginHorizontal: 3,
  },
  subView: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  subAreaBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  subAreaText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subAreaContent: {
    marginBottom: 3,
    marginHorizontal: 0.5,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default Search;
