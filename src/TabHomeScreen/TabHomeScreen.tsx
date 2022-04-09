import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabHomeMain} from './TabHomeMain';
import {AndroidNativeModule} from './AndroidNativeModule/AndroidNativeModule';
const TabHomeStack = createNativeStackNavigator();

const TabHomeScreen = () => {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Group>
        <TabHomeStack.Screen
          name={'TabHomeMain'}
          component={TabHomeMain}
          options={{headerShown: false}}
        />
        <TabHomeStack.Screen
          options={{
            headerTitle: 'Android Native Module in Kotlin',
            headerStyle: {
              backgroundColor: '#B75EA4',
            },
          }}
          name={'AndroidNativeModule'}
          component={AndroidNativeModule}
        />
      </TabHomeStack.Group>
    </TabHomeStack.Navigator>
  );
};

export default TabHomeScreen;
