import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'StackNav'}>
      <Tab.Screen name={'StackNav'} component={MainScreen} />
      <Tab.Screen name={'Main'} component={MainScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
