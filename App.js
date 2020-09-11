/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import { store } from './src/store/index';
import { Provider } from 'react-redux';
import BottomTabNavigator from "./src/components/navigation";
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/components/stackNavigator';
import DrawerNavigator from './src/components/drawer'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>

          <DrawerNavigator>
          </DrawerNavigator>
        </NavigationContainer>
     
      
    </Provider>
  );
};


export default App;
