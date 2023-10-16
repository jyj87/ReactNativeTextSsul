import {StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import SearchBarArea from '../components/subSearch/SearchBarArea';
import SortArea from '../components/subSearch/SortArea';
import ContentArea from '../components/subSearch/ContentArea';

const Search = ({route, navigation}) => {
  const searchPostList = useSelector(state => state.search.searchPostList);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarText, setSearchBarText] = useState('');

  return (
    <SafeAreaView edges={['top']} style={{marginHorizontal: 8, flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SearchBarArea
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      <SortArea />
      <ContentArea
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        searchPostList={searchPostList}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Search;
