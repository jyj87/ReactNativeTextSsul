import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const homeBoardDataList = useSelector((state) => state.board.mainBoards)
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ImageBackground
        source={homeBoardDataList[0].boardCoverImage} 
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text
              style={styles.text}
              onPress={() =>
                navigation.navigate('Board', {
                  boardData: homeBoardDataList[0],
                })
              }>
              {homeBoardDataList[0].boardTitle}
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
