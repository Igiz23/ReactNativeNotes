import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export type Props = {
  navigation: any;
  baseEnthusiasmLevel: number;
};

type barProps = {
  animated?: boolean;
  backgroundColor?: string;
  hidden?: boolean;
  barStyle?: 'default' | 'dark-content' | 'light-content';
};

export const FocusAwareStatusBar = ({
  animated,
  backgroundColor,
  hidden,
  barStyle,
}: barProps) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar
      animated={animated}
      backgroundColor={backgroundColor}
      hidden={hidden}
      barStyle={barStyle}
    />
  ) : null;
};

const Hello: React.FC<Props> = ({baseEnthusiasmLevel = 0, navigation}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] =
    React.useState(baseEnthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={'#6A51AE'}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.greeting}>
            Native Stack Navigator Home
            {getExclamationMarks(enthusiasmLevel)}
          </Text>
          <Text>
            {'Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.\n' +
              '\n' +
              'This navigator uses the native APIs UINavigationController on iOS and Fragment on Android so that navigation built with createNativeStackNavigator will behave exactly the same and have the same performance characteristics as apps built natively on top of those APIs. It also offers basic Web support using react-native-web.\n' +
              '\n' +
              "One thing to keep in mind is that while @react-navigation/native-stack offers native performance and exposes native features such as large title on iOS etc., it may not be as customizable as @react-navigation/stack depending on your needs. So if you need more customization than what's possible in this navigator, consider using @react-navigation/stack instead - which is a more customizable JavaScript based implementation."}
          </Text>
          <View>
            <Button
              title="Increment +!"
              accessibilityLabel="increment"
              onPress={onIncrement}
              color="blue"
            />
            <Button
              title="Decrement -!"
              accessibilityLabel="decrement"
              onPress={onDecrement}
              color="red"
            />
            <Button
              title={'Stack Navigation'}
              color={'aqua'}
              onPress={() =>
                navigation.navigate('StackNavigation', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                })
              }
            />
            <Button
              title={'Open Top Tabs'}
              color={'#501054'}
              onPress={() => navigation.navigate('MaterialTopTabs')}
            />
            <Button
              title={'Open Modal screen'}
              color={'#003454'}
              onPress={() => navigation.navigate('ModalScreen')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Hello;
