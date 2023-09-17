import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';

const Search = () => {
  const searchDataList = useSelector(state => state.search.searchData);
  return (
    <SafeAreaView 
      edges={['top']} 
      style={{marginHorizontal: 8, flex: 1,}}>
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
          {justifyContent: 'space-between', marginBottom: 10},
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
        <View name="mainContent" style={{flex: 1}}>
          <View style={styles.mainView}>
            <ImageBackground
              source={searchDataList[0].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.mainAreaBackgroundImage}>
              <View style={styles.mainAreaContent}>
                <Text style={styles.mainAreaText}>
                  {searchDataList[0].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View name="subContent1" style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.subView}>
            <ImageBackground
              source={searchDataList[1].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.subAreaBackgroundImage}>
              <View style={styles.subAreaContent}>
                <Text style={styles.subAreaText}>
                  {searchDataList[1].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.subView}>
            <ImageBackground
              source={searchDataList[2].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.subAreaBackgroundImage}>
              <View style={styles.subAreaContent}>
                <Text style={styles.subAreaText}>
                  {searchDataList[2].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.subView}>
            <ImageBackground
              source={searchDataList[3].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.subAreaBackgroundImage}>
              <View style={styles.subAreaContent}>
                <Text style={styles.subAreaText}>
                  {searchDataList[3].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View name="subContent2" style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.subView}>
            <ImageBackground
              source={searchDataList[4].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.subAreaBackgroundImage}>
              <View style={styles.subAreaContent}>
                <Text style={styles.subAreaText}>
                  {searchDataList[4].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.subView}>
            <ImageBackground
              source={searchDataList[5].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.subAreaBackgroundImage}>
              <View style={styles.subAreaContent}>
                <Text style={styles.subAreaText}>
                  {searchDataList[5].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.subView}>
            <ImageBackground
              source={searchDataList[5].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.subAreaBackgroundImage}>
              <View style={styles.subAreaContent}>
                <Text style={styles.subAreaText}>
                  {searchDataList[5].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  mainView: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  mainAreaBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainAreaText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainAreaContent: {
    marginBottom: 3,
    marginHorizontal: 0.5,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default Search;
