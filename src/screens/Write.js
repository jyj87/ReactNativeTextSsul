import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  ImageBackground,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDownHashTypeMenu from '../components/subWrite/DropDownHashTypeMenu';
import DropDownBoardTypeMenu from '../components/subWrite/DropDownBoardTypeMenu';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, Image} from 'react-native-elements';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {insertPost} from '../reducers/write_reducer';

const Write = () => {
  const [count, setCount] = useState('테스트입니다');
  const [photoList, setPhotoList] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [selectedBoardTypeValue, setSelectedBoardTypeValue] = useState('item1');
  const [selectedHashTypeValue, setSelectedHashTypeValue] = useState('item1');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // 렌더링 시 한번만 실행
  useEffect(() => {
    console.log('렌더링 시 한번만 실행 : 갤러리 데이터 취득');
    getUserPhotoList();
  }, []);

  const getUserPhotoList = async () => {
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos',
      });
      setPhotoList(edges);
    } catch (err) {
      console.log('앨범 데이터 가져오기 실패: '.err);
    }
  };

  const getUserSelectPhoto = () => {
    const options = {
      title: '이미지 선택',
      cancelButtonTitle: '취소',
      takePhotoButtonTitle: '카메라로 사진 찍기',
      chooseFromLibraryButtonTitle: '앨범에서 사진 선택',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('사용자가 취소했습니다.');
      } else if (response.error) {
        console.error('에러:', response.error);
      } else {
        const selectedImageUri = response.assets[0].uri;
        setSelectedPhoto(selectedImageUri);
        console.log('선택한 사진 데이터 취득 성공');
      }
    });
  };

  // 게시글 등록
  const setPost = () => {
    //validation Check 추가 필요 
    dispatch(
      insertPost({
        insertData: [
          title,
          context,
          selectedBoardTypeValue,
          selectedHashTypeValue,
          selectedPhoto,
        ],
      }),
    );
    moveHome()
  };

  // cancel button -> home 이동
  const moveHome = () => {
    navigation.navigate('Home', {
      requestView: 'Write',
    });
  };

  return (
    <SafeAreaView edges={['top']} style={{marginHorizontal: 8, flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{flex: 1}}>
        {/* ================== insertDeleteArea ================== */}
        <View
          name="insertDeleteArea"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              moveHome();
            }}>
            <Octicons name="x" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPost();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#DCD8D8',
              height: 25,
              paddingHorizontal: 5,
              borderRadius: 50,
            }}>
            <FontAwesome name="send" size={13} color="black" />
            <Text style={{marginHorizontal: 8}}>등록</Text>
          </TouchableOpacity>
        </View>
        {/* ================== insertDeleteArea ================== */}
        {/* ================== inputTitleArea ================== */}
        <View name="inputTitleArea" style={{alignItems: 'center'}}>
          <View>
            <TextInput
              placeholder="제목을 입력하세요"
              onChangeText={text => setTitle(text)}
              style={{
                backgroundColor: '#DCD8D8',
                borderRadius: 15,
                height: 40,
                width: 280,
              }}
            />
          </View>
        </View>
        {/* ================== inputTitleArea ================== */}
        {/* ================== dropDownMenuArea ================== */}
        <View
          name="dropDownMenuArea"
          style={[
            Platform.OS === 'ios'
              ? styles.iosDropDownMenu
              : androidDropDownMenu,
          ]}>
          <View>
            <DropDownHashTypeMenu
              selectedHashTypeValue={selectedHashTypeValue}
              setSelectedHashTypeValue={setSelectedHashTypeValue}
            />
          </View>
          <View style={{paddingLeft: 3}}>
            <DropDownBoardTypeMenu
              selectedBoardTypeValue={selectedBoardTypeValue}
              setSelectedBoardTypeValue={setSelectedBoardTypeValue}
            />
          </View>
        </View>
        {/* ================== dropDownMenuArea ================== */}
        {/* ================== Line ================== */}
        <View style={{alignItems: 'center'}}>
          <View style={styles.textLine} />
        </View>
        {/* ================== Line ================== */}
        {/* ================== inputTextBody ================== */}
        <View
          name="inputTextBody"
          style={{
            backgroundColor: '#DCD8D8',
            borderRadius: 15,
            height: 500,
            alignItems: 'center',
          }}>
          {selectedPhoto && (
            <View>
              <Image
                source={{uri: selectedPhoto}}
                style={{
                  width: (500 / 10) * 5,
                  height: (500 / 10) * 5,
                  borderRadius: 15,
                  marginVertical: 10,
                }}
              />
            </View>
          )}
          <ScrollView horizontal={false}>
            <TextInput
              placeholder="내용을 입력하세요"
              multiline={true}
              onChangeText={text => setContext(text)}
              style={{
                paddingTop: 10,
                width: (500 / 10) * 5,
                height: (500 / 10) * 4,
              }}
            />
          </ScrollView>
        </View>
        {/* ================== inputTextBody ================== */}
        {/* ================== inputImageSelect ================== */}
        <View name="inputImageSelect" style={{}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingHorizontal: 2, paddingVertical: 6}}>
                <TouchableOpacity
                  onPress={getUserSelectPhoto}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 15,
                    backgroundColor: '#DCD8D8',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons name="photo-camera" size={35} color="black" />
                </TouchableOpacity>
              </View>
              {photoList.map((photo, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedPhoto(photo.node.image.uri);
                  }}
                  style={{paddingHorizontal: 2, paddingVertical: 6}}>
                  <Image
                    source={{uri: photo.node.image.uri}}
                    style={{width: 70, height: 70, borderRadius: 15}}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        {/* ================== inputImageSelect ================== */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textLine: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    width: '95%',
    marginVertical: 10,
  },
  iosDropDownMenu: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  androidDropDownMenu: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Write;
