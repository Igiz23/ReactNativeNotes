import {
  View,
  Button,
  Text,
  StyleSheet,
  Alert,
  InteractionManager,
} from 'react-native';
import React from 'react';
// import {Image} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const LogoTitle = () => {
  return (
    <>
      {/*<Image style={styles.img} source={require('../assets/icon-react.png')} />*/}
      <Text style={styles.textHeader}>Custom</Text>
    </>
  );
};

export const ModalScreen = ({navigation}: any) => {
  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        // console.log(
        //   'Defer our work until the animations or gestures have finished',
        // );
      });
      Alert.alert('ModalScreen was focused');
      // Do something when the screen is focused
      return () => {
        task.cancel();
        Alert.alert('ModalScreen was unfocused', 'useFocusEffect()');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        This is a modal screen and Replacing the title with a custom component!
      </Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Dismiss"
        color={'#005454'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    textAlign: 'center',
  },
  textHeader: {
    textAlign: 'center',
    paddingHorizontal: 15,
    color: '#22215B',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  img: {
    width: 45,
    height: 40,
  },
});
