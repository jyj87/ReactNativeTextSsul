import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notice = () => {
    const navigation = useNavigation();
    const moveProfile = () =>{
        navigation.navigate('Profile');
    }
  return (
    <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
      <Text>Notice</Text>
      <TouchableOpacity onPress={()=>moveProfile()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Notice