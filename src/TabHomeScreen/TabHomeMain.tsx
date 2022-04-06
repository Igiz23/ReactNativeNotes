import React from 'react';
import {View, Button} from 'react-native';
import {styles} from '../ReactNavigation/Home';
export const TabHomeMain = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Button
        title={'Open Android Calendar Module'}
        color={'#107854'}
        onPress={() => navigation.navigate('AndroidCalendarModule')}
      />
    </View>
  );
};
