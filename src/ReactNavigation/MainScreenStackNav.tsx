import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import StackNavigation from './StackNavigation';
import {ModalScreen} from './ModalScreen';
import {LogoTitle} from './ModalScreen';
import {Alert, Button} from 'react-native';

const Stack = createNativeStackNavigator();

const MainScreenStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Group>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name={'StackNavigation'}
          component={StackNavigation}
          options={{
            headerTitle: () => <LogoTitle />,
            headerTitleAlign: 'center',
            // headerBackImageSource: require('../assets/circled-left-2.png'),
            headerTintColor: '#2934D0',
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name={'ModalScreen'}
          component={ModalScreen}
          options={{
            headerTitle: () => <LogoTitle />,
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="right"
                color="#00cc00"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="left"
                color="#00cc00"
              />
            ),
            headerTintColor: '#154fa2',
            headerBackImageSource: require('../assets/circled-left-2.png'),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default MainScreenStackNav;
