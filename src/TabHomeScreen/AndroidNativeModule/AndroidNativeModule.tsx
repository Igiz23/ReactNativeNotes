import React from 'react';
import {View, NativeModules, Button} from 'react-native';
import {styles} from '../../ReactNavigation/Home';

const {CustomNative} = NativeModules;

export const AndroidNativeModule = ({navigation}: any) => {
  navigation.route;
  const onPress = () => {
    CustomNative.Toastshow(
      'Toast module written in Kotlin (ﾉ◕ヮ◕)ﾉ*:･ﾟ',
      CustomNative.SHORT,
    );
  };
  return (
    <View style={styles.container}>
      <Button onPress={() => onPress()} title={'Call toast'} />
      <Button
        onPress={() => navigation.navigate('CalendarModule')}
        title={'Calendar module'}
      />
    </View>
  );
};
