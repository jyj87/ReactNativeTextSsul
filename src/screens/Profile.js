import {
  View,
  Text,
  Button,
  StatusBar,
  PanResponder,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const goLogin = () => {
    navigation.navigate("Login")

  }
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.roundedView} onPress={()=>goLogin()}>
          <Text style={{color:'black', fontSize:15}}>Login 하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedView: {
    width: 150,
    height: 150,
    borderRadius: 75, // 반지름 값으로 모서리를 둥글게 조정
    backgroundColor: '#DCD8D8', // 배경색 설정 (원하는 색상으로 변경)
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
