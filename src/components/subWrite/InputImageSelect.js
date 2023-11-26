import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';

const InputImageSelect = ({photoList, setPhotoList, setSelectedPhoto}) => {
  //선택한 이미지 가져오기
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

  return (
    <View name="inputImageSelect">
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
  );
};

const styles = StyleSheet.create({});

export default InputImageSelect;
