import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {insertPost} from '../../reducers/write_reducer';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InsertDeleteArea = ({
  title,
  context,
  selectedBoardTypeValue,
  selectedHashTypeValue,
  selectedPhoto,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // cancel button -> home 이동
  const moveHome = () => {
    navigation.navigate('Home', {
      requestView: 'Write',
    });
  };

  // 게시글 등록
  const setPost = () => {
    //validation Check 추가 필요
    dispatch(
      insertPost({
        insertData: [
          title,
          context,
          selectedBoardTypeValue,
          selectedHashTypeValue,
          selectedPhoto,
        ],
      }),
    );
    moveHome();
  };
  return (
    <View
      name="insertDeleteArea"
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          moveHome();
        }}>
        <Octicons name="x" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPost();
        }}
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
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InsertDeleteArea;
