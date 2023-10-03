import {View, Text, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { ThemeProvider, Text as RNEText } from 'react-native-elements';


// TODO 폰트 적용은 나중에
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직을 구현할 수 있습니다.
    console.log('로그인 버튼이 클릭되었습니다.');
    console.log('이메일:', email);
    console.log('비밀번호:', password);
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
