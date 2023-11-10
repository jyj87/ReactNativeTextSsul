import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const InputTitleArea = ({setTitle, title}) => {
  return (
    <View name="inputTitleArea" style={{alignItems: 'center'}}>
      <View>
        <TextInput
          placeholder="제목을 입력하세요"
          onChangeText={text => setTitle(text)}
          value={title}
          style={{
            backgroundColor: '#DCD8D8',
            borderRadius: 15,
            height: 40,
            width: 280,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputTitleArea;
