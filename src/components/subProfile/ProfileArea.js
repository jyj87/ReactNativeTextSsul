import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {loginOut} from '../../reducers/login_reducer';
import { useDispatch } from 'react-redux';
import {clearToken} from '../../util/accessToken'

const ProfileArea = ({member}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const moveLoginOut = () => {
    // AsyncStorage(Tokenクリア) -> ログインフラグ変更　-> ログイン画面表示
    clearToken();
    dispatch(loginOut());
  };
  const moveShop = () => {
    navigation.navigate('Shop');
  };
  const moveSetting = () => {
    navigation.navigate('Setting');
  };
  const moveNotice = () => {
    navigation.navigate('Notice');
  };

  return (
    <View name="profileArea" style={styles.profileArea}>
      <View name="userNameView" style={[styles.textBaseView]}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome6 name="ranking-star" size={15} color="black" />
          <Text style={{marginLeft: 3}}>{member.lv}</Text>
        </View>

        <View>
          <Text style={{fontSize: 30}}>{member.nickName}</Text>
        </View>
      </View>

      <View name="userEmailView" style={styles.textBaseView}>
        <Text style={{fontSize: 20}}>{member.email}</Text>
      </View>

      <View
        name="userStatusArea"
        style={[styles.textBaseView, {flexDirection: 'row', marginBottom: 20}]}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            {member.articleCount}
          </Text>
          <Text>게시물</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            {member.likeCount}
          </Text>
          <Text>인기도</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            {member.point}
          </Text>
          <Text>포인트</Text>
        </View>
      </View>

      <View
        name-="optionButtonArea"
        style={[styles.textBaseView, {flexDirection: 'row'}]}>
        <TouchableOpacity
          onPress={() => moveShop()}
          style={styles.baseIconView}>
          <Entypo name="shop" size={35} color="black" />
          <Text style={{marginTop: 5}}>shop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveSetting()}
          style={styles.baseIconView}>
          <AntDesign name="setting" size={35} color="black" />
          <Text style={{marginTop: 5}}>설정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveNotice()}
          style={styles.baseIconView}>
          <Ionicons name="notifications" size={35} color="black" />
          <Text style={{marginTop: 5}}>알림</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveLoginOut()}
          style={styles.baseIconView}>
          <Entypo name="log-out" size={32} color="black" />
          <Text style={{marginTop: 5}}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseIconView: {
    marginHorizontal:2,
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: '#DCD8D8',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    height: 25,
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  textBaseView: {
    alignItems: 'center',
    marginVertical: 5,
  },
  profileArea: {
    flex: 0.37,
    alignItems: 'center',
  },
});

export default ProfileArea;
