import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const TempScreen5 = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

export default TempScreen5