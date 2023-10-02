import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import { setSelectSearchPostData } from '../../reducers/board_reducer';

const RankSubPostList = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
    //게시물 클릭
  const selectPost = postIndex => {
    navigation.navigate('Board', {requestView: 'Rank'});
    dispatch(setSelectSearchPostData({postIndex: postIndex}));
  };
  return (
    <FlatList
      // 옵션: 가로 배치
      horizontal={true}
      // 옵션: 스크롤바를 숨김
      showsVerticalScrollIndicator={false}
      data={props.subPostList}
      style={styles.baseFlex}
      keyExtractor={item => item.postIndex}
      renderItem={({item, index}) => (
        <TouchableOpacity 
        onPress={() => selectPost(item.postIndex)}
        style={{paddingLeft: 5, paddingBottom: 5}}>
          <ImageBackground
            source={item.postCoverImage}
            imageStyle={{borderRadius: 10}}
            style={[styles.snbBackgroundImage]}
            resizeMode="cover">
            <View style={styles.subImageTextView}>
              <Text style={styles.subImageText}>{item.postTitle}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="crown-outline"
                  size={20}
                  color="yellow"
                />
                <Text style={{color: 'yellow', fontWeight: 'bold'}}>
                  {index}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  baseFlex: {
    flex: 1,
  },
  snbBackgroundImage: {
    flex: 1,
    width: 110,
    height: screenHeight / 5,
  },
  subImageTextView: {
    marginBottom: 1.5,
    marginHorizontal: 0.2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subImageText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default RankSubPostList;
