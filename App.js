import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Rank from './src/screens/Rank';
import Search from './src/screens/Search';
import Write from './src/screens/Write';
import Board from './src/screens/Board';
import {NavigationContainer} from '@react-navigation/native';
import TempScreen1 from './src/screens/TempScreen1';
import TempScreen2 from './src/screens/TempScreen2';
import TempScreen3 from './src/screens/TempScreen3';
import TempScreen4 from './src/screens/TempScreen4';
import TempScreen5 from './src/screens/TempScreen5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
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
      </Tab.Navigator>
    );
  };
  return (
    // 재스처를 사용하기 위해 RootView 감싸줘야 한다.
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
          <Stack.Screen name="TempScreen1" component={TempScreen1} />
          <Stack.Screen name="TempScreen2" component={TempScreen2} />
          <Stack.Screen name="TempScreen3" component={TempScreen3} />
          <Stack.Screen name="TempScreen4" component={TempScreen4} />
          <Stack.Screen name="TempScreen5" component={TempScreen5} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
