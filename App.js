import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Rank from './src/screens/Rank';
import Search from './src/screens/Search';
import Write from './src/screens/Write';
import Board from './src/screens/Board';
import Login from './src/screens/Login';
import Shop from './src/screens/Shop';
import Setting from './src/screens/Setting';
import Notice from './src/screens/Notice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getInitPostList} from './src/reducers/home_reducer';
import {getInitSearchPostList} from './src/reducers/search_reducer';
import {getInitRankPostList} from './src/reducers/rank_reducer';
import {loginCheck} from './src/reducers/login_reducer';
import {loginRequests} from './src/api/loginRequests';
import {LoginEnum, HomeEnum, SearchEnum} from './src/enum/requestConst';
import {homeRequests} from './src/api/homeRequests';
import {searchRequests} from './src/api/searchRequests';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  //ログインフラグ更新
  const tokenCheck = async () => {
    const loginFlag = await loginRequests(LoginEnum.LOGIN_CHECK);
    dispatch(loginCheck(loginFlag));
  };
  //Home画面データ設定
  const initHomeArticleData = async () => {
    const articleList = await homeRequests(HomeEnum.INIT_DATA);
    dispatch(getInitPostList(articleList));
  };

  const initSearchArticleData = async () => {
    const articlesList = await searchRequests(SearchEnum.INIT_DATA);
    dispatch(getInitSearchPostList(articlesList));
  };
  //초기 데이터 취득
  useEffect(() => {
    
    dispatch(getInitRankPostList());
    tokenCheck();
    initHomeArticleData();
    initSearchArticleData();
  }, []);

  const loginFlag = useSelector(state => state.login.loginFlag);

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Write') {
              iconName = focused ? 'plussquare' : 'plussquareo';
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Rank') {
              iconName = focused ? 'crown' : 'crown-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Write" component={Write} />
        <Tab.Screen name="Rank" component={Rank} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen
          name="Board"
          component={Board}
          options={{tabBarButton: () => null}}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{tabBarButton: () => null}}
        />
      </Tab.Navigator>
    );
  };
  return (
    // 재스처를 사용하기 위해 RootView 감싸줘야 한다.
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Notice" component={Notice} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
