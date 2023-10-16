import {View, StyleSheet, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import DropDownHashTypeMenu from '../components/subWrite/DropDownHashTypeMenu';
import DropDownBoardTypeMenu from '../components/subWrite/DropDownBoardTypeMenu';
import InsertDeleteArea from '../components/subWrite/InsertDeleteArea';
import InputTitleArea from '../components/subWrite/InputTitleArea';
import InputTextBody from '../components/subWrite/InputTextBody';
import InputImageSelect from '../components/subWrite/InputImageSelect';
import LineWrite from '../components/subWrite/LineWrite';

const Write = () => {
  const [photoList, setPhotoList] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [selectedBoardTypeValue, setSelectedBoardTypeValue] = useState('item1');
  const [selectedHashTypeValue, setSelectedHashTypeValue] = useState('item1');

  // 렌더링 시 한번만 실행
  useEffect(() => {
    console.log('렌더링 시 한번만 실행 : 갤러리 데이터 취득');
    getUserPhotoList();
  }, []);

  // 유저 사진첩 이미지 가져오기
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

  return (
    <SafeAreaView edges={['top']} style={{marginHorizontal: 8, flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <InsertDeleteArea
        title={title}
        context={context}
        selectedBoardTypeValue={selectedBoardTypeValue}
        selectedHashTypeValue={selectedHashTypeValue}
        selectedPhoto={selectedPhoto}
      />
      <InputTitleArea setTitle={setTitle} />
      <View
        name="dropDownMenuArea"
        style={[
          Platform.OS === 'ios' ? styles.iosDropDownMenu : androidDropDownMenu,
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
      <LineWrite />
      <InputTextBody selectedPhoto={selectedPhoto} setContext={setContext} />
      <InputImageSelect
        photoList={photoList}
        setPhotoList={setPhotoList}
        setSelectedPhoto={setSelectedPhoto}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
