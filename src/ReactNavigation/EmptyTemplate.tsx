import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Home';

const EmptyTemplate = () => {
  return (
    <View style={styles.container}>
      <Text>{'Example Screen'}</Text>
    </View>
  );
};

export default EmptyTemplate;
