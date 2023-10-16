import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ProfileArea = ({userInfo}) => {
  const navigation = useNavigation();
  const moveLogin = () => {
    navigation.navigate('Login');
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
          <Text style={{marginLeft: 3}}>{userInfo.userLv}</Text>
        </View>

        <Text style={{fontSize: 30}}>{userInfo.userName}</Text>
      </View>

      <View name="userEmailView" style={styles.textBaseView}>
        <Text style={{fontSize: 20}}>{userInfo.userEmail}</Text>
      </View>

      <View
        name="userStatusArea"
        style={[styles.textBaseView, {flexDirection: 'row', marginBottom: 20}]}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            {userInfo.postCount}
          </Text>
          <Text>게시물</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            {userInfo.postCount}
          </Text>
          <Text>구독자</Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            {userInfo.postCount}
          </Text>
          <Text>잉여력</Text>
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
          style={[styles.baseIconView, {marginHorizontal: 30}]}>
          <AntDesign name="setting" size={35} color="black" />
          <Text style={{marginTop: 5}}>설정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveNotice()}
          style={styles.baseIconView}>
          <Ionicons name="notifications" size={35} color="black" />
          <Text style={{marginTop: 5}}>알림</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseIconView: {
    width: 100,
    height: 100,
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
