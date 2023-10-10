import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {userInfo} from '../data/tempProfileData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const navigation = useNavigation();
  const goLogin = () => {
    navigation.navigate('Login');
  };

  const testData = userInfo;

  const setScrollViewLocation = ({viewableItems}) => {};

  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View name="profileArea" style={styles.profileArea}>
        <View style={styles.textBaseView}>
          <Text style={{fontSize: 35}}>{testData.user.userName}</Text>
        </View>

        <View style={styles.textBaseView}>
          <Text style={{fontSize: 20}}>{testData.user.userEmail}</Text>
        </View>

        <View style={[styles.textBaseView, {flexDirection: 'row'}]}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>{testData.user.postCount}</Text>
            <Text>게시물</Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>{testData.user.postCount}</Text>
            <Text>구독자</Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>{testData.user.postCount}</Text>
            <Text>잉여력</Text>
          </View>
        </View>

        <View style={[styles.textBaseView, {flexDirection: 'row'}]}>
          <View style={styles.baseIconView}>
            <Entypo name="shop" size={35} color="black" />
            <Text>shop</Text>
          </View>
          <View style={[styles.baseIconView,{marginHorizontal:30}]}>
            <AntDesign name="setting" size={35} color="black" />
            <Text>설정</Text>
          </View>
          <View style={styles.baseIconView}>
            <Ionicons name="notifications" size={35} color="black" />
            <Text>알림</Text>
          </View>
        </View>
      </View>

      <View
        name="userPostCommentsListArea"
        style={styles.userPostCommentsListArea}>
        <View
          style={[
            styles.textBaseView,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            },
          ]}>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Text>Post</Text>
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Text>Comments</Text>
          </View>
        </View>

        <FlatList
          // 옵션: 가로 배치
          horizontal={true}
          // 옵션: 페이징 단위로 넘어감
          pagingEnabled={true}
          // 옵션: 스크롤바를 숨김
          showsHorizontalScrollIndicator={false}
          // // 옵션: 스크롤바를 상단에 위치
          // inverted={true}
          // index 변화가 있으면 실행됨
          onViewableItemsChanged={({viewableItems}) =>
            setScrollViewLocation({viewableItems})
          }
          data={testData.userPostAndCommentList}
          keyExtractor={item => item.typeIndex}
          renderItem={({item}) => {
            // 조건문을 사용하여 type에 따라 다른 내용 렌더링
            if (item.typeIndex === 1) {
              return (
                <ScrollView style={styles.postAndCommentView}>
                  {item.postAndComment.map((i, index) => (
                    <View key={index}>
                      <Text>test</Text>
                      <Text>{i.name}</Text>
                    </View>
                  ))}
                </ScrollView>
              );
            } else if (item.typeIndex === 2) {
              return (
                <ScrollView style={styles.postAndCommentView}>
                  {item.postAndComment.map((i, index) => (
                    <View key={index}>
                      <Text>test</Text>
                      <Text>{i.name}</Text>
                    </View>
                  ))}
                </ScrollView>
              );
            } else {
              return null; // 다른 경우에는 렌더링하지 않음
            }
          }}
        />
      </View>

      {/* <TouchableOpacity style={styles.roundedView} onPress={() => goLogin()}>
          <Text style={{color: 'black', fontSize: 15}}>Login 하기</Text>
        </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  baseIconView: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postAndCommentView: {
    width: screenWidth,
  },
  horizontalLine: {
    height: 25,
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  textBaseView: {
    alignItems: 'center',
    marginVertical: 5,
  },
  profileArea: {
    flex: 0.5,
    alignItems: 'center',
  },
  userPostCommentsListArea: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'column',
  },
  roundedView: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#DCD8D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
