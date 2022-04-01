import React from 'react';
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const NavigateType = ({text, btnTitle, navigate}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{text}</Text>
      <Button title={btnTitle} onPress={navigate} />
    </View>
  );
};

export type Props = {
  text: string;
  btnTitle: string;
  navigate: (event: GestureResponderEvent) => void;
};

type HomeProps = {
  navigation: any;
};

const StackNavigation: React.FC<HomeProps> = ({navigation}) => {
  return (
    <>
      <NavigateType
        text={"Use navigation.push('StackNavigation')"}
        btnTitle={'Go to StackNavigation again'}
        navigate={() => {
          navigation.push('StackNavigation');
        }}
      />
      <NavigateType
        text={'Use navigation.goBack()'}
        btnTitle={'Go back'}
        navigate={() => {
          navigation.goBack();
        }}
      />
      <NavigateType
        text={"Use navigation.navigate('Home')"}
        btnTitle={'Go to Home'}
        navigate={() => {
          navigation.navigate('Home');
        }}
      />
    </>
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

export default StackNavigation;
