import React from 'react';
import {
  Button,
  GestureResponderEvent,
  ScrollView,
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
  route: any;
};

const StackNavigation: React.FC<HomeProps> = ({route, navigation}) => {
  const arg = Object.entries(route.params);
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <>
        <View style={styles.container}>
          <Text style={styles.greeting}>Passing parameters to routes:</Text>
          <Text>
            Route params length: {Object.entries(route.params).length}
          </Text>
          <View>
            {arg.map(item => {
              return <Text key={item[0]}>{item[0] + ' : ' + item[1]}</Text>;
            })}
          </View>
        </View>
        <NavigateType
          text={"Use navigation.push('StackNavigation')"}
          btnTitle={'Go to StackNavigation again'}
          navigate={() => {
            navigation.push('StackNavigation', {
              itemId: Math.floor(Math.random() * 100),
              otherParam: Math.floor(Math.random() * 100),
              addParam: Math.floor(Math.random() * 100),
            });
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
        <NavigateType
          text={
            "Updating options, use navigation.setOptions({title: 'Updated!'})"
          }
          btnTitle={'Update this title'}
          navigate={() => {
            navigation.setOptions({
              title: 'Updated!',
              headerStyle: {
                backgroundColor: '#f00',
              },
            });
          }}
        />
      </>
    </ScrollView>
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
