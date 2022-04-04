import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import StackNavigation from './StackNavigation';
import {ModalScreen} from './ModalScreen';
import {LogoTitle} from './ModalScreen';
import {Alert, Button} from 'react-native';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Group>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'StackNavigation'}
          component={StackNavigation}
          options={{title: 'My custom title'}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name={'ModalScreen'}
          component={ModalScreen}
          options={{
            headerTitle: () => <LogoTitle />,
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
            headerBackImageSource: require('../assets/icon-react.png'),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default MainScreen;
