import {View, Button, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export const LogoTitle = () => {
  return (
    <>
      <Image style={styles.img} source={require('../assets/icon-react.png')} />
      <Text style={styles.textHeader}>Custom</Text>
    </>
  );
};

export const ModalScreen = ({navigation}: any) => {
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
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    textAlign: 'center',
  },
  textHeader: {
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    color: '#f00',
  },
  img: {
    width: 45,
    height: 40,
  },
});
