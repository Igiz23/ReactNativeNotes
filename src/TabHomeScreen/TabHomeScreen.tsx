import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabHomeMain} from './TabHomeMain';
import {AndroidCalendarModule} from './AndroidNativeModule/AndroidCalendarModule';
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
            headerTitle: 'Android Calendar Module in Kotlin',
            headerStyle: {
              backgroundColor: '#107854',
            },
          }}
          name={'AndroidCalendarModule'}
          component={AndroidCalendarModule}
        />
      </TabHomeStack.Group>
    </TabHomeStack.Navigator>
  );
};

export default TabHomeScreen;
