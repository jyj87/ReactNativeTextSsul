import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const InputTextBody = ({selectedPhoto, setContext}) => {
  return (
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
  );
};

const styles = StyleSheet.create({});

export default InputTextBody;
