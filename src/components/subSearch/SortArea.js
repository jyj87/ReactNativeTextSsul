import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {setSortData} from '../../reducers/search_reducer';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native-elements';
import {searchRequests} from '../../api/searchRequests';
import {SearchEnum} from '../../enum/requestConst';
import {insertSearchBarText} from '../../reducers/search_reducer';


const SortArea = ({searchBarText, setSearchPage,selectSortFlag}) => {
  const dispatch = useDispatch();
  
  //Sort Button (sort처리가된 게시물을 취득)
  const sortData = async sortFlag => {
    //Sort最近化
    dispatch(setSortData({sortFlag: sortFlag}));
    const articlesList = await searchRequests(SearchEnum.SORT_SEARCH, [
      0,
      searchBarText,
      sortFlag,
    ]);
    //Page最近化
    setSearchPage(0);
    dispatch(insertSearchBarText(articlesList));

  };

  return (
    <View name="sortArea" style={[styles.sortView]}>
      <TouchableOpacity
        onPress={() => sortData(1)}
        style={styles.sortTouchableArea}>
        <Ionicons name="heart" size={20} style={[styles.sortIcons,{color:selectSortFlag===1 ?'blue':'black'}] } />
        <Text>좋아요순</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sortData(2)}
        style={styles.sortTouchableArea}>
        <Ionicons name="eye" size={20} style={[styles.sortIcons,{color:selectSortFlag===2 ?'blue':'black'}]} />
        <Text>조회수순</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sortData(3)}
        style={styles.sortTouchableArea}>
        <MaterialIcons name="fiber-new" size={20} style={[styles.sortIcons,{color:selectSortFlag===3 ?'blue':'black'}]} />
        <Text>최신글순</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sortData(4)}
        style={styles.sortTouchableArea}>
        <MaterialIcons name="comment" size={20} style={[styles.sortIcons,{color:selectSortFlag===4 ?'blue':'black'}]} />
        <Text>댓글수순</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default SortArea;
