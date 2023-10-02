import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {setSelectSearchPostData} from '../../reducers/board_reducer';

const MainPost = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //게시물 클릭
  const selectPost = postIndex => {
    navigation.navigate('Board', {requestView: 'Rank'});
    dispatch(setSelectSearchPostData({postIndex: postIndex}));
  };
  return (
    <View name="mainArea" style={styles.baseFlex}>
      <View
        style={[styles.baseFlex, {paddingVertical: 5, paddingHorizontal: 5}]}>
        <TouchableOpacity 
        onPress={() => selectPost(props.mainPost[0].postIndex)}
        style={styles.baseFlex}>
          <ImageBackground
            source={props.mainPost[0].postCoverImage}
            imageStyle={{borderRadius: 10}}
            resizeMode="cover"
            style={styles.mainBackgroundImage}>
            <View style={styles.mainImageTextView}>
              <Text style={styles.mainImageText}>{props.mainPost[0].postTitle}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    baseFlex: {
        flex: 1,
      },
      mainBackgroundImage: {
        flex: 1,
        width: '100%',
        height: screenHeight/3,
      },
      mainImageTextView: {
        marginBottom: 3,
        marginHorizontal: 0.5,
        flex: 1,
        justifyContent: 'flex-end',
      },
      mainImageText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
});
export default MainPost;
