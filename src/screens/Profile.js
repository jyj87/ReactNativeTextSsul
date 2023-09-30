import {View, Text, StatusBar, PanResponder} from 'react-native';
import React,{useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      // 터치 이동 이벤트 처리
      const { dx, dy } = gesture;
      setPosition({ x: position.x + dx, y: position.y + dy });
    },
    onPanResponderRelease: () => {
      // 터치 종료 이벤트 처리
    },
  });

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{flex:1 , backgroundColor:'red', ...panResponder.panHandlers}}>
        <View style={{width:300, height:100, backgroundColor:'gray'}}></View>
      </View>
    </SafeAreaView>
  );
}

export default Profile