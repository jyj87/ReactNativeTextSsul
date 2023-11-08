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
import {setArticleData, setSelectSearchPostData} from '../../reducers/board_reducer';
import { readRequests } from '../../api/readRequests';
import { ReadEnum } from '../../enum/requestConst';

const MainPost = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //選択したArticleデータ取得
  const getArticle = async articleId => {
    const article = await readRequests(ReadEnum.ARTICLE_READ, articleId);
    const articleCommentList = await readRequests(
      ReadEnum.COMMENT_READ,
      articleId,
    );
    dispatch(setArticleData({article, articleCommentList}));
  };

  //게시물 클릭
  const selectPost = articleId => {
    getArticle(articleId);
    navigation.navigate('Board', {requestView: 'Rank'});
  
  };
  return (
    <View name="mainArea" style={styles.baseFlex}>
      <View
        style={[styles.baseFlex, {paddingVertical: 5, paddingHorizontal: 5}]}>
        <TouchableOpacity
          onPress={() => selectPost(props.mainArticle[0].articleId)}
          style={styles.baseFlex}>
          <ImageBackground
            source={props.mainArticle[0].thumbnailImagePath}
            imageStyle={{borderRadius: 10}}
            resizeMode="cover"
            style={styles.mainBackgroundImage}>
            <View style={styles.mainImageTextView}>
              <Text style={styles.mainImageText}>
                {props.mainArticle[0].articleTitle}
              </Text>
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
    height: screenHeight / 3,
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
