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

const Write = () => {
  const [count, setCount] = useState('테스트입니다');
  const [photoList, setPhotoList] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('사용자가 취소했습니다.');
      } else if (response.error) {
        console.error('에러:', response.error);
      } else {
        const selectedImageUri = response.assets[0].uri;
        setSelectedPhoto(selectedImageUri);
        console.log('선택한 사진 데이터 취득 성공')
      }
    });

  };

  return (
    <SafeAreaView edges={['top']} style={{marginHorizontal: 8, flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View>
        <View
          name="insertDeleteArea"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
          }}>
          <View>
            <Octicons name="x" size={25} color="black" />
          </View>
          <View
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
          </View>
        </View>
        <View name="inputTitleArea" style={{alignItems: 'center'}}>
          <View>
            <TextInput
              placeholder="제목을 입력하세요"
              style={{
                backgroundColor: '#DCD8D8',
                borderRadius: 15,
                height: 40,
                width: 280,
              }}
            />
          </View>
        </View>
        <View
          name="dropDownMenuArea"
          style={[
            Platform.OS === 'ios'
              ? styles.iosDropDownMenu
              : androidDropDownMenu,
          ]}>
          <View>
            <DropDownHashTypeMenu />
          </View>
          <View style={{paddingLeft: 3}}>
            <DropDownBoardTypeMenu />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.textLine} />
        </View>
        <View name="inputBodyArea">
          <View name="inputTextBody">
            <TextInput
              placeholder="내용을 입력하세요"
              style={{
                backgroundColor: '#DCD8D8',
                borderRadius: 15,
                height: 300,
              }}></TextInput>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View name="inputImageSelect">
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
                    <MaterialIcons
                      name="photo-camera"
                      size={35}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                {photoList.map((photo, index) => (
                  <View
                    key={index}
                    style={{paddingHorizontal: 2, paddingVertical: 6}}>
                    <Image
                      source={{uri: photo.node.image.uri}}
                      style={{width: 70, height: 70, borderRadius: 15}}
                    />
                  </View>
                ))}
              </View>
              {selectedPhoto && <Image source={{ uri: selectedPhoto }} style={styles.image} />}
            </View>
          </ScrollView>
        </View>
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
