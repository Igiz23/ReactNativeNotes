import React from 'react';
import {Button, View} from 'react-native';
import CalendarModule from './CalendarModuleInterface';
import {styles} from '../../ReactNavigation/Home';

export const AndroidCalendarModule = ({navigation}: any) => {
  navigation.void;
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
};
