import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownHashTypeMenu from '../components/subWrite/DropDownHashTypeMenu';
import DropDownBoardTypeMenu from '../components/subWrite/DropDownBoardTypeMenu';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Button } from 'react-native-elements';

const Write = () => {
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
          <View style={{paddingLeft:3}}>
            <DropDownBoardTypeMenu />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.textLine} />
        </View>
        <View name="inputBodyArea">
        <Button title='show picker' onPress={ShowPicker}></Button>
          <TextInput 
          placeholder="내용을 입력하세요"
          style={{
            backgroundColor: '#DCD8D8',
            borderRadius: 15,
            height:250}}>
          </TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
};

const ShowPicker = () => {
  //launchImageLibrary : 사용자 앨범 접근
    launchImageLibrary({}, (res)=>{
      alert(res.assets[0].uri)
      const formdata = new FormData()
      formdata.append('file', res.assets[0].uri);
      console.log(res);
    })
}

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
