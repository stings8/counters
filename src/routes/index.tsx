import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Counters} from '../screens/counters';
import {Config} from '../screens/config';
import theme from '../global/styles/theme';
import {ms} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

const {Navigator, Screen} = createBottomTabNavigator();

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
          paddingVertical: ms(4),
          height: ms(55),
        },
      }}>
      <Screen
        name="Counters"
        component={Counters}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="list" color={color} size={ms(28)} />
          ),
        }}
      />

      <Screen
        name="Config"
        component={Config}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="settings" color={color} size={ms(28)} />
          ),
        }}
      />
    </Navigator>
  );
}
