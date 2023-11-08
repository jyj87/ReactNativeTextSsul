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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {setArticleData, setSelectSearchPostData} from '../../reducers/board_reducer';
import { ReadEnum } from '../../enum/requestConst';
import { readRequests } from '../../api/readRequests';

const RankSubPostList = props => {
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
    <FlatList
      // 옵션: 가로 배치
      horizontal={true}
      // 옵션: 스크롤바를 숨김
      showsVerticalScrollIndicator={false}
      data={props.subArticleList}
      style={styles.baseFlex}
      keyExtractor={item => item.articleId}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => selectPost(item.articleId)}
          style={{paddingLeft: 5, paddingBottom: 5}}>
          <ImageBackground
            source={item.thumbnailImagePath}
            imageStyle={{borderRadius: 10}}
            style={[styles.snbBackgroundImage]}
            resizeMode="cover">
            <View name="subPostTopArea" style={styles.subImageTopTextView}>
              <Text style={styles.subImageTopText}>{index + 1}</Text>
            </View>
            <View
              name="subPostBottomArea"
              style={styles.subImageBottomTextView}>
              <Text style={styles.subImageBottomText}>{item.articleTitle}</Text>
              <View style={styles.subImageBottomIconView}>
                <Ionicons name="eye" size={15} color="white" />
                <Text style={styles.subImageBottomIconText}>
                  {item.commentCnt}
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
  subImageTopTextView: {
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 5,
    width: 30,
    height: 30,
  },
  subImageTopText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subImageBottomTextView: {
    marginBottom: 1.5,
    marginHorizontal: 0.2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subImageBottomText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subImageBottomIconView: {
    width: 40,
    height: 20,
    backgroundColor: '',
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subImageBottomIconText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    marginVertical: 2,
  },
});
export default RankSubPostList;
