/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './src/navigation';
import Purchases from 'react-native-purchases';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#121211', flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
