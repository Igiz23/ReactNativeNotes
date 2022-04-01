import {View, Button, Text, StyleSheet} from 'react-native';
import React from 'react';

export const ModalScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>This is a modal!</Text>
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
  },
});
