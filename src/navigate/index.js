import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
import {HomeScreen, ForecastScreen} from '../screens';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Button, Text, View, Linking} from 'react-native';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const Navigation = () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forecast" component={ForecastScreen} />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{getMainStack()}</Stack.Navigator>;
};

export default Navigation;
