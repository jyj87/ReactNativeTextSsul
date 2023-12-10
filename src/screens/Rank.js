import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import RankSubPostList from '@/components/subRank/RankSubPostList';
import Feather from 'react-native-vector-icons/Feather';
import MainPost from '../components/subRank/MainPost';

const Rank = () => {
  const rankArticleList = useSelector(state => state.rank.rankArticleList);
  const mainArticle = rankArticleList.mainArticle;
  const subArticleList1 = rankArticleList.subArticleList1;
  const subArticleList2 = rankArticleList.subArticleList2;
  const subArticleList3 = rankArticleList.subArticleList3;

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.baseFlex, {paddingHorizontal: 8}]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <MainPost mainArticle={mainArticle}/>
        <View style={styles.subPostListLabelView}>
          <Feather name="hash" size={20} color="black" />
          <Text style={{fontSize:15}}>유머</Text>
        </View>
        <RankSubPostList subArticleList={subArticleList1} />
        <View style={styles.subPostListLabelView}>
          <Feather name="hash" size={20} color="black" />
          <Text style={{fontSize:15}}>사랑</Text>
        </View>
        <RankSubPostList subArticleList={subArticleList2} />
        <View style={styles.subPostListLabelView}>
          <Feather name="hash" size={20} color="black" />
          <Text style={{fontSize:15}}>취업</Text>
        </View>
        <RankSubPostList subArticleList={subArticleList3} />
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
