import {View, StatusBar, ScrollView, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import TopArea from '../components/subBoard/TopArea';
import LineBoard from '../components/subBoard/LineBoard';
import MiddleArea from '../components/subBoard/MiddleArea';
import BottomArea from '../components/subBoard/BottomArea';
import {PanGestureHandler} from 'react-native-gesture-handler';
const Board = ({route, navigation}) => {
  const articleData = useSelector(state => state.board.article);
  const articleCommentList = useSelector(
    state => state.board.articleCommentList,
  );

  // 뒤로 가기
  const goBack = event => {
    if (event.nativeEvent.translationX > 50) {
      // Before View로 이동
      const requestViewName = route.params.requestView;
      navigation.navigate(requestViewName);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <PanGestureHandler onGestureEvent={goBack}>
        <View style={{flex: 1}}>
          <TopArea articleData={articleData} />
          <LineBoard />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[
              Platform.OS === 'ios' ? styles.iosScrollView : androidScrollView,
            ]}>
            <MiddleArea articleData={articleData} />
            <BottomArea articleCommentList={articleCommentList} />
          </ScrollView>
        </View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iosScrollView: {
    showsVerticalScrollIndicator: false,
  },
  androidScrollView: {
    android: (fadeScrollbars = 'true'),
  },
});
export default Board;
