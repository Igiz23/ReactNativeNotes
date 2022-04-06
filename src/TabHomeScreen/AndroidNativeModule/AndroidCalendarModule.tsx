import React from 'react';
import {View, Button} from 'react-native';
import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

export const AndroidCalendarModule = ({navigation}: any) => {
  navigation._void;
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };
  return (
    <View>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
};
