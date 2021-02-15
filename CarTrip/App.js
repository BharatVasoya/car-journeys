import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import images from './src/common/helper/Images';

global.token = '';
global.userName = '';
global.userImage = images.USER_IMAGE;

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
