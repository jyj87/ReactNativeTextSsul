import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {TextInput} from 'react-native-gesture-handler';
import {insertSearchBarText} from '../../reducers/search_reducer';
import {searchRequests} from '../../api/searchRequests';
import {SearchEnum} from '../../enum/requestConst';

const SearchBarArea = ({
  searchBarText,
  setSearchBarText,
  searchPage,
  setSearchPage,
}) => {
  const dispatch = useDispatch();

  const searchBarTextInsert = async () => {
    if (searchBarText.trim() === '') {
      Alert.alert('경고', '데이터를 입력해주세요');
    } else {
      const articlesList = await searchRequests(SearchEnum.TITLE_SEARCH, [
        0,
        searchBarText,
      ]);
      dispatch(insertSearchBarText(articlesList));
      setSearchPage(0);
    }
  };

  return (
    <View name="searchBarArea" style={styles.searchBar}>
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
        onChangeText={text => setSearchBarText(text)}
        value={searchBarText}
        onFocus={() => {
          setSearchBarText(''), setSearchPage(0);
        }}
        onSubmitEditing={() => searchBarTextInsert()}
        style={{
          color: '#808080',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#DCD8D8',
    height: 30,
    borderRadius: 10,
  },
});

export default SearchBarArea;
