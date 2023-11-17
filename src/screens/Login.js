import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import {ThemeProvider, Text as RNEText} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {loginRequests} from '../api/loginRequests';
import {profileRequests} from '../api/profileRequests';
import {setUserInfo} from '../reducers/profile_reducer';
import {login} from '../reducers/login_reducer';
import {LoginEnum,ProfileEnum} from '../enum/requestConst';

// TODO 폰트 적용은 나중에
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //ログインフラグ更新
  const handleLogin = async () => {
    //★ 로그인 성공시 프로필 파일 가져와야함 , 실패시도 처리 필요 함
    await loginRequests(LoginEnum.LOGIN_PROCESS, [email, password]);
    const loginFlag = await loginRequests(LoginEnum.LOGIN_CHECK);
    const member = await profileRequests(ProfileEnum.INIT_PROFILE);
    dispatch(login(loginFlag));
    dispatch(setUserInfo({member}));
  };

  const theme = {
    fonts: {
      regular: 'Caveat-Bold', // 폰트 이름
    },
  };

  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.loginViewArea}>
        <Text style={styles.loginTitleText}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="이메일"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <ThemeProvider theme={theme}>
            <RNEText>login</RNEText>
          </ThemeProvider>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginViewArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCD8D8',
  },
  loginTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  loginButton: {
    width: 300,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Login;
