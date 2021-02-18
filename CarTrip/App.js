import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import images from './src/common/helper/Images';

global.token = '';
global.userName = '';
global.userImage = images.USER_IMAGE;

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
