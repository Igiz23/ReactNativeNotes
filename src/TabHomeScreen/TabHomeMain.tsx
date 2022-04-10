import React, {useState} from 'react';
import {View, Button, SafeAreaView, StyleSheet} from 'react-native';
import {FocusAwareStatusBar, styles} from '../ReactNavigation/Home';

const STYLES: ('default' | 'dark-content' | 'light-content')[] = [
  'default',
  'dark-content',
  'light-content',
];

export const TabHomeMain = ({navigation}: any) => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);
  const changeStatusBarStyle = () => {
    const id = STYLES.indexOf(statusBarStyle) + 1;
    if (id === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[id]);
    }
  };
  return (
    <SafeAreaView style={homeStyles.containerSafe}>
      <FocusAwareStatusBar
        animated={true}
        backgroundColor={'#003454'}
        hidden={hidden}
        barStyle={statusBarStyle}
      />
      <View style={styles.container}>
        <Button
          title={'Open Android Native Module'}
          color={'#107854'}
          onPress={() => navigation.navigate('AndroidNativeModule')}
        />
        <View>
          <Button
            title={'Toggle StatusBar'}
            color={'#61DAFB'}
            onPress={changeStatusBarVisibility}
          />
          <Button
            title={'Change StatusBar Style'}
            color={'#61DAFB'}
            onPress={changeStatusBarStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const homeStyles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    justifyContent: 'center',
  },
});
