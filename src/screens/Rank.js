import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import RankSubPostList from '../components/subRank/RanksubPostList';
import Feather from 'react-native-vector-icons/Feather';
import MainPost from '../components/subRank/MainPost';

const Rank = () => {
  const rankPostList = useSelector(state => state.rank.rankPostList);
  const mainPost = rankPostList.mainPost;
  const subPostList1 = rankPostList.subPostList1;
  const subPostList2 = rankPostList.subPostList2;
  const subPostList3 = rankPostList.subPostList3;

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.baseFlex, {paddingHorizontal: 8}]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <MainPost mainPost={mainPost}/>
        <View style={styles.subPostListLabelView}>
          <Feather name="hash" size={20} color="black" />
          <Text style={{fontSize:15}}>유머</Text>
        </View>
        <RankSubPostList subPostList={subPostList1} />
        <View style={styles.subPostListLabelView}>
          <Feather name="hash" size={20} color="black" />
          <Text style={{fontSize:15}}>사랑</Text>
        </View>
        <RankSubPostList subPostList={subPostList2} />
        <View style={styles.subPostListLabelView}>
          <Feather name="hash" size={20} color="black" />
          <Text style={{fontSize:15}}>취업</Text>
        </View>
        <RankSubPostList subPostList={subPostList3} />
      </ScrollView>
    </SafeAreaView>
  );
};

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  baseFlex: {
    flex: 1,
  },
  subPostListLabelView: {
    flexDirection: 'row', alignItems: 'center',paddingVertical:5
  },

});

export default Rank;
