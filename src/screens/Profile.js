import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {testUserInfo} from '../data/tempProfileData';
import {Image} from 'react-native-elements';
import {useSelector} from 'react-redux';
import ProfileArea from '../components/subProfile/ProfileArea';
import PostList from '../components/subProfile/PostList';
import CommentList from '../components/subProfile/CommentList';
import Login from '../screens/Login';

const testData = testUserInfo;

const Profile = () => {
  // LoginFlag取得(Token有無確認)
  const flag = useSelector(state => state.login.loginFlag);
  // UserInfo取得
  const userInfo = useSelector(state => state.profile.userInfo);
  var userArticleAndCommentList = [];
  userArticleAndCommentList = userInfo.userArticleAndCommentList


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

  if (flag) {
    return (
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ProfileArea member={userInfo.member} />
        <View
          name="userPostCommentsListArea"
          style={styles.userPostCommentsListArea}>
          <View
            name="postAndCommentLabelView"
            style={[styles.postAndCommentLabel]}>
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
              data={userInfo.userArticleAndCommentList}
              keyExtractor={item => item.typeIndex}
              renderItem={({item}) => {
                // 조건문을 사용하여 type에 따라 다른 내용 렌더링
                if (item.typeIndex === 1) {
                  return <PostList item={item} />;
                } else if (item.typeIndex === 2) {
                  return <CommentList item={item} />;
                } else {
                  return null; // 다른 경우에는 렌더링하지 않음
                }
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return <Login />;
  }
};

const styles = StyleSheet.create({
  customScrollbar: {
    height: 3,
    backgroundColor: '#DCD8D8',
    marginBottom: 10,
  },
  postAndCommentLabel: {
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
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
