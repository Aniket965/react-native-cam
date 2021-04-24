/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraPage from './src/CameraPage';
import PhotoPage from './src/PhotoPage';
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Camerapage"   screenOptions={{
    headerShown: false
  }} >
      <Stack.Screen name="Camerapage" component={CameraPage} />
      <Stack.Screen name="photopage" component={PhotoPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
