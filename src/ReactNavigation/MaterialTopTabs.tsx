import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EmptyTemplate from './EmptyTemplate';

const MaterialTopTabsNav = createMaterialTopTabNavigator();

const MaterialTopTabs = ({navigation}: any) => {
  navigation.void;
  return (
    <MaterialTopTabsNav.Navigator>
      <MaterialTopTabsNav.Screen
        name="Chat"
        component={EmptyTemplate}
        options={{title: 'Chat'}}
      />
      <MaterialTopTabsNav.Screen
        name="Contacts"
        component={EmptyTemplate}
        options={{title: 'Contacts'}}
      />
      <MaterialTopTabsNav.Screen
        name="Albums"
        component={EmptyTemplate}
        options={{title: 'Albums'}}
      />
    </MaterialTopTabsNav.Navigator>
  );
};

export default MaterialTopTabs;
