import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreenStackNav from './MainScreenStackNav';
import TabHomeScreen from '../TabHomeScreen/TabHomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'StackNav'}
      screenOptions={() => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name={'StackNav'} component={MainScreenStackNav} />
      <Tab.Screen name={'TabHome'} component={TabHomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
