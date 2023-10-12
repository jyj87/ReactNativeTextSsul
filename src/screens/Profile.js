import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {userInfo} from '../data/tempProfileData';
import {Image} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const testData = userInfo;

const Profile = () => {
  const navigation = useNavigation();
  // 스크롤바 x축
  const [scrollPosition, setScrollPosition] = useState(0);
  // 스크롤바 x축 취득
  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const newScrollPosition = contentOffset.x;
    setScrollPosition(newScrollPosition);
  };
  // 스크롤바 넓이 취득 (화면 넓비 / 페이징수 )
  const scrollbarWidth = Dimensions.get('window').width / 2;
  // 스크롤바 위치 취득
  const scrollbarPosition =
    scrollbarWidth * (scrollPosition / Dimensions.get('window').width);

  const goLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View name="profileArea" style={styles.profileArea}>
        <View
          name="userNameView"
          style={[styles.textBaseView, {marginTop: 10}]}>
          <Text style={{fontSize: 35}}>{testData.user.userName}</Text>
        </View>

        <View name="userEmailView" style={styles.textBaseView}>
          <Text style={{fontSize: 20}}>{testData.user.userEmail}</Text>
        </View>

        <View
          name="userStatusArea"
          style={[
            styles.textBaseView,
            {flexDirection: 'row', marginBottom: 20},
          ]}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>
              {testData.user.postCount}
            </Text>
            <Text>게시물</Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>
              {testData.user.postCount}
            </Text>
            <Text>구독자</Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>
              {testData.user.postCount}
            </Text>
            <Text>잉여력</Text>
          </View>
        </View>

        <View
          name-="optionButtonArea"
          style={[styles.textBaseView, {flexDirection: 'row'}]}>
          <TouchableOpacity style={styles.baseIconView}>
            <Entypo name="shop" size={35} color="black" />
            <Text style={{marginTop: 5}}>shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.baseIconView, {marginHorizontal: 30}]}>
            <AntDesign name="setting" size={35} color="black" />
            <Text style={{marginTop: 5}}>설정</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.baseIconView}>
            <Ionicons name="notifications" size={35} color="black" />
            <Text style={{marginTop: 5}}>알림</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        name="userPostCommentsListArea"
        style={styles.userPostCommentsListArea}>
        <View
          name="postAndCommentLabelView"
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

        <View name="postAndCommentListView" style={{flex: 1}}>
          <View
            name="customScrollView"
            style={[
              styles.customScrollbar,
              {width: scrollbarWidth, left: scrollbarPosition},
            ]}
          />

          <FlatList
            // 옵션: 페이징 단위로 넘어감
            pagingEnabled={true}
            // 옵션: 가로 배치
            horizontal={true}
            // 옵션: 가로 스크롤 숨김
            showsHorizontalScrollIndicator={false}
            // 옵션: 스크롤 이벤트 정보를 설정한 함수로 전달
            onScroll={handleScroll}
            // 옵션: 스크롤 감속 속도 설정
            decelerationRate="fast"
            // 옵션: 스크롤 이벤트 발생 빈도 설정
            scrollEventThrottle={16}
            data={testData.userPostAndCommentList}
            keyExtractor={item => item.typeIndex}
            renderItem={({item}) => {
              // 조건문을 사용하여 type에 따라 다른 내용 렌더링
              if (item.typeIndex === 1) {
                return (
                  <ScrollView style={styles.postAndCommentView}>
                    {item.postAndComment.map((i, index) => (
                      <TouchableOpacity key={index}>
                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                          <Image
                            source={i.postCoverImage}
                            style={styles.postListImage}
                          />
                          <View style={styles.postListTextView}>
                            <Text style={{fontWeight:'bold'}}>{i.postTitle}</Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <Ionicons name="heart" size={15} color="black" />
                              <Text style={{marginRight: 5}}>
                                {i.postLikeCount}
                              </Text>
                              <Ionicons name="eye" size={15} color="black" />
                              <Text style={{marginRight: 5}}>
                                {i.postViewCount}
                              </Text>
                              <MaterialIcons
                                name="comment"
                                size={15}
                                color="black"
                              />
                              <Text style={{marginRight: 5}}>
                                {i.postViewCount}
                              </Text>
                              <Text style={{marginRight: 5}}>
                                {i.createdDate}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                );
              } else if (item.typeIndex === 2) {
                return (
                  <ScrollView style={styles.postAndCommentView}>
                    {item.postAndComment.map((i, index) => (
                      <TouchableOpacity key={index}>
                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                          <Image
                            source={i.postCoverImage}
                            style={styles.postListImage}
                          />
                          <View style={styles.postListTextView}>
                            <Text style={{fontWeight: 'bold'}}>
                              {i.postTitle}
                            </Text>
                            <Text>{i.commentContext}</Text>
                            <View style={{flexDirection: 'row'}}>
                              <Ionicons name="heart" size={15} color="black" />
                              <Text style={{marginRight: 5}} value>{i.commentLikeCount}</Text>
                              <Text style={{marginRight: 5}}>{i.createdDate}</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                );
              } else {
                return null; // 다른 경우에는 렌더링하지 않음
              }
            }}
          />
        </View>
      </View>

      {/* <TouchableOpacity style={styles.roundedView} onPress={() => goLogin()}>
          <Text style={{color: 'black', fontSize: 15}}>Login 하기</Text>
        </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  postListImage: {
    width: screenWidth * (1 / 5),
    height: screenWidth * (1 / 5),
    borderRadius: 15,
    marginLeft: 10,
  },
  postListTextView: {
    marginHorizontal: 15,
    width: screenWidth * (4 / 5),
    justifyContent: 'center',
    paddingBottom:5,
    borderBottomWidth: 1, // 라인 두께
    borderBottomColor: '#DCD8D8', // 라인 색상
  },
  customScrollbar: {
    height: 3,
    backgroundColor: '#DCD8D8',
    marginBottom: 10,
  },
  baseIconView: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#DCD8D8',
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
    flex: 0.37,
    alignItems: 'center',
  },
  userPostCommentsListArea: {
    flex: 0.63,
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
