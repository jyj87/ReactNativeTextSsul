import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';

const Rank = () => {
  const searchDataList = useSelector(state => state.search.searchData);
  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.baseFlex, {paddingHorizontal: 8}]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View name="mainArea" style={styles.baseFlex}>
        <View
          style={[styles.baseFlex, {paddingVertical: 5, paddingHorizontal: 5}]}>
          <TouchableOpacity style={styles.baseFlex}>
            <ImageBackground
              source={searchDataList[0].boardCoverImage}
              imageStyle={{borderRadius: 10}}
              resizeMode="cover"
              style={styles.mainBackgroundImage}>
              <View style={styles.mainImageTextView}>
                <Text style={styles.mainImageText}>
                  {searchDataList[0].boardTitle}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        name="subArea_1"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[styles.baseFlex, {flexDirection: 'row'}]}>
        {searchDataList.map((d, index) => (
          <View
            key={index}
            style={[
              styles.baseFlex,
              {paddingVertical: 5, paddingHorizontal: 5},
            ]}>
            <TouchableOpacity style={styles.baseFlex}>
              <ImageBackground
                source={d.boardCoverImage}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.snbBackgroundImage}>
                <View style={styles.subImageTextView}>
                  <Text style={styles.subImageText}>{d.boardTitle}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <ScrollView
        name="subArea_2"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[styles.baseFlex, {flexDirection: 'row'}]}>
        {searchDataList.map((d, index) => (
          <View
            key={index}
            style={[
              styles.baseFlex,
              {paddingVertical: 5, paddingHorizontal: 5},
            ]}>
            <TouchableOpacity style={styles.baseFlex}>
              <ImageBackground
                source={d.boardCoverImage}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.snbBackgroundImage}>
                <View style={styles.subImageTextView}>
                  <Text style={styles.subImageText}>{d.boardTitle}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <ScrollView
        name="subArea_3"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[styles.baseFlex, {flexDirection: 'row'}]}>
        {searchDataList.map((d, index) => (
          <View
            key={index}
            style={[
              styles.baseFlex,
              {paddingVertical: 5, paddingHorizontal: 5},
            ]}>
            <TouchableOpacity style={styles.baseFlex}>
              <ImageBackground
                source={d.boardCoverImage}
                imageStyle={{borderRadius: 10}}
                resizeMode="cover"
                style={styles.snbBackgroundImage}>
                <View style={styles.subImageTextView}>
                  <Text style={styles.subImageText}>{d.boardTitle}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseFlex: {
    flex: 1,
  },
  mainBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainImageTextView: {
    marginBottom: 3,
    marginHorizontal: 0.5,
    flex: 1,
    justifyContent: 'flex-end',
  },
  mainImageText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  snbBackgroundImage: {
    flex: 1,
    width: 110,
    height: '100%',
  },
  subImageTextView: {
    marginBottom: 1.5,
    marginHorizontal: 0.2,
    flex: 1,
    justifyContent: 'flex-end',
  },
  subImageText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Rank;
