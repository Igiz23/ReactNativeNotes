import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import StackNavigation from './StackNavigation';
import {ModalScreen} from './ModalScreen';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'StackNavigation'} component={StackNavigation} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal', headerShown: false}}>
        <Stack.Screen name={'ModalScreen'} component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default MainScreen;
